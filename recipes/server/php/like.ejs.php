$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->checklikeexists(<%- likeButton.videoID %>);
echo json_encode($result);
