var filter = new Kaltura.objects.KalturaMediaEntryFilter();
filter.nameLike = <%- mediaList.nameLike.code %>;
var pager = new Kaltura.objects.KalturaFilterPager();
KalturaClient.media.listAction(function(results) {
  <%- Lucy.returnCode("results.objects") %>
}, filter, pager);
