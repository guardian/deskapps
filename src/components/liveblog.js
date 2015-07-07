var timer;

module.exports = {
  notify: function(win, iframeWin, parentDoc, childDoc) {

    console.log("HEY HEY HEY ");

    var numOfBlocks = -1;
    var label = '';

    if (timer) {
        clearInterval(timer);
    }

    /* check every 2 seconds */
    timer = setInterval(function() {
      
      var blocks = childDoc.querySelectorAll('div.js-blog-blocks > div.block');
      console.log("number of blocks: " + numOfBlocks);
      console.log("blocks length: " + blocks.length)
      if ((blocks.length > 0) && (blocks.length > numOfBlocks)) {
        numOfBlocks = blocks.length;

        console.log("go for it");

        var time = blocks[0].querySelector('.block-time__absolute').firstChild.textContent;
        var title = blocks[0].querySelectorAll('div.block-elements > p')[0].innerHTML;

        console.log("time" + time )
        console.log("title" + time )

        var options = {
          icon: "http://yourimage.jpg",
          body: title
        };

        iframeWin.Notification(title, options);
      } else {
        /* do nothing */
      }

      if (blocks.length > 0) {
        var lastUpdated = blocks[0].querySelector('time.js-timestamp').firstChild.textContent;
        if (lastUpdated !== label) {

            if (win.tray) {
                var type = platform.isOSX ? 'menubar' : 'tray';
                var alert = label ? '_alert' : '';
                var extension = platform.isOSX ? '.tiff' : '.png';
                win.tray.icon = 'images/icon_' + type + alert + extension;
            }
            console.log("Set label: " + lastUpdated)
            win.setBadgeLabel(lastUpdated);
            label = lastUpdated;
        }
      }

      // Find count
      //win.setBadgeLabel(label);

      /* Update the tray icon too */
      //if (win.tray) {
     //   var type = platform.isOSX ? 'menubar' : 'tray';
     //   var alert = label ? '_alert' : '';
     //   var extension = platform.isOSX ? '.tiff' : '.png';
     //   win.tray.icon = 'images/icon_' + type + alert + extension;
     // }*/
    }, 2000);

  }
};
