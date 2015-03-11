function listMedia() {
  if (!KalturaClient.ks) {
    return setTimeout(listMedia, 100);
  }
  var filter = new KalturaMediaEntryFilter();
  var pager = null;
  KalturaClient.media.listAction(function(success, results) {
<%- Lucy.code.returnCode("results.objects", 4) %>
  }, filter, pager);
}
listMedia();
