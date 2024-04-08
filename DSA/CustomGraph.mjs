class CustomGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            console.log("Invalid vertex")
            return
        }
        if (!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    dfsIterative(startVertex) {
        const stack = [startVertex]
        const result = []
        const visited = {}
        visited[startVertex] = true
        while (stack.length) {
            let currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
    bfs(startVertex) {
        const visited = []
        const queue = [startVertex]
        const result = []
        while (queue.length) {
            const vertex = queue.shift()
            if (!visited[vertex]) {
                visited[vertex] = true
                result.push(vertex)
                this.adjacencyList[vertex].forEach((neighbor) => {
                    if (!visited[neighbor]) {
                        queue.unshift(neighbor)
                    }
                })
            }
        }
        return result
    }

    print() {
        for (const [vertex, edges] of Object.entries(this.adjacencyList)) {
            console.log(`${vertex} -> ${edges.join(", ")}`)
        }
    }
}
const graph = new CustomGraph()

//          B
//        /  \
//      A     D
//       \   /
//        C
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A", "B")
graph.addEdge("A", "B")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "D")
console.log("Graph:")
graph.print()
console.log(graph.dfsIterative("B"))
console.log(graph.bfs("A"))