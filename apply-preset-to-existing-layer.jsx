// ~ apply-preset-to-existing-layer.jsx
// works great with rd_gimmePropsPath.jsx

var main = function() {

  var proj = app.project;
  var folder = Folder.myDocuments.fsName + '/Adobe/After Effects CC 2014/User Presets/';
  var ffxspill1 = 'jacobs-spill-surpress-01.ffx';
  var presetfilepath = folder + ffxspill1; // "path/to/mypreset.ffx";
  var pfile = File(presetfilepath);
  if (pfile.exists !== true) {
    alert('Preset file does not exist');
    return;
  }

  app.beginUndoGroup('apply preset');

  for (var i = 0; i < proj.selection.length; i++) {

    var item = proj.selection[i];

    if (item instanceof CompItem) {
      var layer = item.layers[1];
      $.writeln(layer.name);
      layer.applyPreset(pfile);
    }

  }
  app.endUndoGroup();
  return 0;
};


var run = function(f) {
  return f();
};

run(main);
