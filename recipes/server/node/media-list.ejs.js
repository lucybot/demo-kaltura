      var filter = new Kaltura.objects.KalturaMediaEntryFilter();
      filter.nameLike = <%- mediaList.nameLike %>;
      var pager = new Kaltura.objects.KalturaFilterPager();
      KalturaClient.media.listAction(function(results) {
        console.log('list media:' + JSON.stringify(results));
        if (results.objectType === 'KalturaAPIException') { console.log('err:' + JSON.stringify(results)); throw results; }
        res.json(results.objects);
      }, filter, pager);
