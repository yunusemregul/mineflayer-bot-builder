const log = console.log;

function generateCodeFromGraph(graph)
{
    for (const node of graph._nodes) {
        if (node.generateCode)
        {
            log(node.generateCode())
        }
    }
}