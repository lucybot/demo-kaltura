$filter = new KalturaMediaEntryFilter();
$filter->nameLike = <%- mediaList.nameLike.code %>;
echo json_encode($KalturaClient->media->add(<%- mediaList.entryId.code %>));
