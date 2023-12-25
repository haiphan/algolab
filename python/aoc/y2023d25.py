#!/usr/bin/env python3
import networkx as nx

def read_input():
  with open("id25y2023.txt") as f:
    ll = [line.rstrip() for line in f]
    lines = []
    for l in ll:
      left,right = l.split(": ")
      right = right.split()
      lines.append((left, right))
    return lines

def sol(arr):
    vertices = set()
    edges = set()
    for left, right in arr:
        vertices.add(left)
        for v in right:
            vertices.add(v)
            edges.add((left, v))
    print("ve", len(vertices), len(edges))
    graph = nx.Graph()
    graph.add_nodes_from(vertices)
    graph.add_edges_from(edges)
    etocut = nx.minimum_edge_cut(graph)
    graph.remove_edges_from(etocut)
    a,b = nx.connected_components(graph)
    print("product", len(a) * len(b))

def main():
  graph = read_input()
  sol(graph)

if __name__ == "__main__":
  main()