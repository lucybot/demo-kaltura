$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->checklikeexists(<%- likeButton.videoID %>);
<%- Lucy.returnCode("array('liked' => $result)") %>;
