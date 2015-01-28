$likePlugin = KalturaLikeClientPlugin::get($KalturaClient);
$result = $likePlugin->like->like(<%- Lucy.answer('likeButton', 'videoID') %>);
<%- Lucy.returnCode("array('liked' => $result)") %>;
