$filter = new KalturaMediaEntryFilter();
$filter->nameLike = <%- mediaList.nameLike.code %>;
$result = $KalturaClient->media->listAction($filter, null);
<%- Lucy.returnCode("$result") %>;
