var filter = new Kaltura.objects.KalturaMediaEntryFilter();
filter.nameLike = <%= mediaList.nameLike %>;
var pager = new Kaltura.objects.KalturaFilterPager();
KalturaClient.media.listAction(function(results) {
  if (results.objectType === 'KalturaAPIException') return callback(results);
  callback(null, results.objects);
}, filter, pager);
