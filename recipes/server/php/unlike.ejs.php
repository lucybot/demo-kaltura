$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->unlike(<%- likeButton.videoID %>);
echo json_encode(array('liked' => !$result));
