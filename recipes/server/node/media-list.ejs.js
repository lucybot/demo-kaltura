var filter = new Kaltura.objects.KalturaMediaEntryFilter();
filter.nameLike = <%- mediaList.nameLike.val %>;
var pager = new Kaltura.objects.KalturaFilterPager();
KalturaClient.media.listAction(function(results) {
  res.json(results.objects);
}, filter, pager);
