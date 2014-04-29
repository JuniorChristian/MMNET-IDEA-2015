function ControlsWindow(title) {
	var self = Ti.UI.createWindow({
		title:'IDEA',
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'QR Scan', hasChild:true, test:'ui/common/BaseUIWindow'},
		{title:'POI around', hasChild:true, test:'ui/common/controls/switch'},
		{title:'Go to POI', hasChild:true, test:'ui/common/controls/activity_indicator'},
		{title: 'Help', hasChild:true, test:'ui/common/controls/textarea'},
		{title:'Download Data', hasChild:true, test:'ui/common/controls/progress_bar'}
	];
	

	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Button Bar', hasChild:true, test:'ui/handheld/ios/controls/buttonbar'});
		data.push({title:'Tabbed Bar', hasChild:true, test:'ui/handheld/ios/controls/tabbedbar'});
		data.push({title:'System Buttons', hasChild:true, test:'ui/handheld/ios/controls/system_buttons'});
		data.push({title:'Toolbar', hasChild:true, test:'ui/handheld/ios/controls/toolbar'});
	};
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({
					title:e.rowData.title,
					containingTab:self.containingTab,
					tabGroup:self.tabGroup
				});
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = ControlsWindow;