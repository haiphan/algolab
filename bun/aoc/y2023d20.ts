type InputMem = Record<string, boolean>
type Pulse = [string, boolean, string]
class Mod {
    name: string;
    isCon: boolean;
    mem: boolean | InputMem;
    outputs: string[]
    counters: number[]
    constructor(name: string, isCon: boolean, outputs: string[]) {
        this.name = name;
        this.isCon = isCon;
        this.outputs = outputs;
        this.mem = false;
        this.counters = [0, 0];
        if (isCon) this.mem = {};
    }
    addIn(src: string) {
        if (typeof this.mem === 'boolean') return;
        this.mem[src] = false;
    }
}

function sol(mdict: Record<string, string[]>) {
    let broadcastDst: string[] = [];
    const modMap: Record<string, Mod> = {};
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
    let N = 10**5;
    while (N > 0) {
        N--;
        lohi[0]++;
        const q: Pulse[] = broadcastDst.map((d) => (['broadcaster', false, d]));
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
                q.push(...mod.outputs.map((dst) => ([mod.name, nh, dst] as Pulse)));
                continue;
            }
            if (typeof mod.mem === 'boolean') continue;
            mod.mem[s] = h;
            const allh = Object.values(mod.mem).every(x => x);
            const nh = !allh;
            q.push(...mod.outputs.map((dst) => ([mod.name, nh, dst] as Pulse)));
        }
    }
    console.timeEnd('perf');
    const [lo, hi] = lohi;    
    console.log('lohi', lo, hi, lo * hi);
    return null && mdict;
}

export async function main() {
    const file = Bun.file("./inputy2023d20_main.txt");
    const text = await file.text();
    const mdict: Record<string, string[]> = {};
    text.split('\n').forEach((line) => {
        const [l, rRaw] = line.split(' -> ');
        const r = rRaw.split(', ');
        mdict[l] = r;
    });
    sol(mdict);
}

main();
