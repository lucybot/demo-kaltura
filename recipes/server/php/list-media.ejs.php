$filter = new KalturaMediaEntryFilter();
$filter->nameLike = <%- Lucy.answer('mediaList', 'nameLike') %>;
$result = $KalturaClient->media->listAction($filter, null);
<%- Lucy.returnCode("$result") %>;
