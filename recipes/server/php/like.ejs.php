$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->like(<%- likeButton.videoID %>);
echo json_encode($result);
