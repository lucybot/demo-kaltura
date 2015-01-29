$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->unlike(<%- Lucy.answer('likeButton', 'videoID') %>);
<%- Lucy.returnCode("array('liked' => !$result)") %>;
