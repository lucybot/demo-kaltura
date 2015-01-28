$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->checklikeexists(<%- Lucy.answer(likeButton.videoID) %>);
<%- Lucy.returnCode("array('liked' => $result)") %>;
