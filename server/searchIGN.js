// var searchYouTube = ({key, query, max}, callback) => {
//   // TODO
//   // https://developers.google.com/youtube/v3/docs/search/list

//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: {
//       key: key,
//       q: query,
//       maxResults: max,
//       part: 'snippet',
//       videoEmbeddable: true,
//       type: 'video'
//     },
//     success: function(data) {
//       callback(data.items);
//     },
//     error: function(error) {
//       console.error(error);
//     }
//   });

// };