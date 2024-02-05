const fs = require('fs');
class Mod {
    name;
    isCon;
    mem;
    outputs;
    counters;
    constructor(name, isCon, outputs) {
        this.name = name;
        this.isCon = isCon;
        this.outputs = outputs;
        this.mem = false;
        this.counters = [0, 0];
        if (isCon) this.mem = {};
    }
    addIn(src) {
        this.mem[src] = false;
    }
    receive(src, high, modMap) {
        if (this.isCon) {
            // console.log('con', src, high);
            this.mem[src] = high;
            const allh = Object.values(this.mem).every(x => x);
            const nextHigh = !allh;
            this.counters[Number(nextHigh)] += this.outputs.length;
            return this.outputs.forEach((dst) => {
                console.log('send', this.name, nextHigh, dst, this.mem)
                const mod = modMap[dst];
                if (!mod) return;
                mod.receive(this.name, nextHigh, modMap);
            });
        }
        if (high) return;
        this.mem = !this.mem;
        const nh = this.mem;
        this.counters[Number(nh)] += this.outputs.length;
        this.outputs.forEach((dst) => {
            const mod = modMap[dst];
            console.log('send', this.name, nh, dst)
            if (!mod) return;
            mod.receive(this.name, nh, modMap);
        });
    }
}

function sol(mdict) {
    let broadcastDst = [];
    const modMap = {};
    Object.entries(mdict).forEach(([k, v]) => {
        if (k === 'broadcaster') {
            broadcastDst = v;
            return;
        }
        const name = k.substring(1);
        const isCon = k.includes('&');
        modMap[name] = new Mod(name, isCon, v);
        // console.log('iscon', modMap[name]);
    });
    Object.entries(mdict).forEach(([k, v]) => {
        if (k === 'broadcaster') return;
        v.forEach((dst) => {
            const mod = modMap[dst];
            if (dst === 'rx') return;
            // console.log('dst', dst, mod);
            if (!mod) return console.log('!!nomod', dst)
            if (!mod.isCon) return;
            mod.addIn(k.substring(1));
        });
    });
    console.time('perf');
    let lohi = [0, 0];
    let N = 10000;
    while (N > 0) {
        N--;
        lohi[0]++;
        const q = broadcastDst.map((d) => (['broadcaster', false, d]));
        while (q.length) {
            const head = q.shift();
            if (!head) break;
            const [s, h, d] = head;
            lohi[Number(h)]++
            const mod = modMap[d];
            if (!mod) continue;
            if (!mod.isCon) {
                if (h) continue;
                mod.mem = !mod.mem;
                const nh = mod.mem;
                q.push(...mod.outputs.map((dst) => ([mod.name, nh, dst])));
                continue;
            }
            mod.mem[s] = h;
            const allh = Object.values(mod.mem).every(x => x);
            const nh = !allh;
            q.push(...mod.outputs.map((dst) => ([mod.name, nh, dst])));
        }
    }
    console.timeEnd('perf');
    const [lo, hi] = lohi;    
    console.log('lohi', lo, hi, lo * hi);
    return null && mdict;
}

function main() {
    const text = fs.readFileSync('./inputy2023d20_main.txt').toString();
    const mdict = {};
    text.split('\n').forEach(line => {
        const [l, rRaw] = line.split(' -> ');
        const r = rRaw.split(', ');
        mdict[l] = r;
    });
    sol(mdict);
}

main();
