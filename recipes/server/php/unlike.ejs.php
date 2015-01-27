$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->unlike(<%- likeButton.videoID %>);
<%- Lucy.returnCode("array('liked' => !$result)") %>;
