const visualization = {
  id: "iframe_visualization", 
  label: "Iframe Embed",      
  options: {
    
  },
  create: function(element, config) {
    
    this.iframe = document.createElement('iframe');
    this.iframe.style.border = '0'; // Remove border
    this.iframe.style.width = '100%'; // Full width
    this.iframe.style.height = '100%'; // Full height
    element.appendChild(this.iframe);
  },
  update: function(data, element, config, queryResponse, details) {
    
    this.iframe.src = "https://lookerstudio.google.com/embed/reporting/b87e817d-0ba7-4475-a618-1c6a654c9ccb/page/BHP5D";
  }
};


looker.plugins.visualizations.add(visualization);
