$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->like(<%- likeButton.videoID %>);
<%- Lucy.returnCode("array('liked' => $result)") %>;
