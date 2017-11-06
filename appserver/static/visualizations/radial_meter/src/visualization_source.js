define([
            'jquery',
            'underscore',
            'api/SplunkVisualizationBase',
            'api/SplunkVisualizationUtils',
            'd3',
            'react',
            'react-dom',
            './jsx/ChartComponent',
        ],
        function(
            $,
            _,
            SplunkVisualizationBase,
            SplunkVisualizationUtils,
            d3,
            React,
            ReactDOM,
            Chart
        ) {
        
  
    return SplunkVisualizationBase.extend({
 
        reactView: null,
        _data: null,
        initialize: function() {
            // Save this.$el for convenience
            this.$el = $(this.el);
            //this.data = promiseMSFT = fetch("//rrag.github.io/react-stockcharts/data/MSFT.tsv").then(response => response.text()).then(data => tsvParse(data, parseData(parseDate)))
            // Add a css selector class
//            this._data = getData();
            this.$el.addClass('splunk-radial-meter');
            this.reactView = React.createElement(Chart.default, null, null);
            ReactDOM.render(this.reactView, this.$el[0]);
        },
 
        getInitialDataParams: function() {
            return ({
                outputMode: SplunkVisualizationBase.ROW_MAJOR_OUTPUT_MODE,
                count: 10000
            });
        },

        // Optionally implement to format data returned from search. 
        // The returned object will be passed to updateView as 'data'
        formatData: function(data) {

         // Format data 

             return data;
         },
    
         updateView: function(data, config) {
            console.log("debug");
           // test.updateHeader
        }
    });
});
