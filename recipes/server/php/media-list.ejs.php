$filter = new KalturaMediaEntryFilter();
$filter->nameLike = <%- mediaList.nameLike.code %>;
$result = $KalturaClient->media->listAction($filter, null);
echo json_encode($result);
