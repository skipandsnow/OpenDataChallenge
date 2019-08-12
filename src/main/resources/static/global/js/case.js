
$('document').ready(function () {
    initDecisionTree();
    initCaseViz();
});

function getWindowWidth(){

}
function initDecisionTree() {
    d3.json("api/judgement/decision/tree", function(error, json) {
        treeBoxes('', json.tree);
    });
}

function initCaseViz() {
    var placeholderDiv = document.getElementById("caseViz");
    var url = "https://public.tableau.com/views/ODC/sheet3?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link";
    var options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
        }
    };
    var viz = new tableau.Viz(placeholderDiv, url, options);
}