
export default function github() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.2" width="1024px" height="512px">
      <style>
      <![CDATA[
          @import "https://cdn.eyesprotocol.io/fonts/pretendard@1.1/pretendard.min.css";
          svg {
              font-family: Pretendard, sans-serif;
              font-weight: 400;
              font-size: 12pt;
              overflow-wrap: break-word;
          }
          .category {
              font-size: 12pt;
              fill: #868e96;
          }
          .title {
              font-weight: 700;
              font-size: 50pt;
              fill: #212529;
          }
          .description {
              font-size: 18pt;
              fill: #495057;
          }
          ]]>
      </style>
      <pattern id="image" x="0" y="0" width="1" height="1">
          <image x="0" y="0" href="{{image_url}}" />
      </pattern>
  
      <rect width="1024px" height="1024px" fill="#fff" />
      <text x="70px" y="75pt" class="category">{{category}}</text>
      <text x="70px" y="75pt" class="title">{{title}}</text>
  
      <text x="70px" y="220pt" class="description">{{description}}</text>
  
      <circle cx="850px" cy="127pt" r="100" fill="url(#image)" />
  
      <rect x="0" y="502px" width="1024px" height="10px" fill="{{border_color}}" />
  </svg>`
}
