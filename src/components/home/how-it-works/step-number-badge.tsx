import React from 'react';

interface StepNumberBadgeProps {
  stepNumber: number;
}

export const StepNumberBadge: React.FC<StepNumberBadgeProps> = ({ stepNumber }) => {
  const renderSvg = () => {
    switch (stepNumber) {
      case 1:
        return (
          <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[72.3px] h-[72.3px]">
            <g filter="url(#filter0_d_367_10719)">
              <rect x="2.25977" y="1.12988" width="72.3" height="72.3" rx="36.15" fill="#EFF6FF" shapeRendering="crispEdges"/>
              <rect x="3.38945" y="2.25957" width="70.0406" height="70.0406" rx="35.0203" stroke="#0F6396" strokeWidth="2.25938" shapeRendering="crispEdges"/>
              <path d="M41.3638 28.848V45.2798H37.8896V32.1456H37.7934L34.0304 34.5044V31.4235L38.0982 28.848H41.3638Z" fill="#0F6396"/>
            </g>
            <defs>
              <filter id="filter0_d_367_10719" x="0.00039053" y="0.000195265" width="76.8195" height="76.8186" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1.12969"/>
                <feGaussianBlur stdDeviation="1.12969"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_367_10719"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_367_10719" result="shape"/>
              </filter>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[72.3px] h-[72.3px]">
            <g filter="url(#filter0_d_367_10744)">
              <rect x="2.25977" y="1.12988" width="72.3" height="72.3" rx="36.15" fill="#ECFDF5" shapeRendering="crispEdges"/>
              <rect x="3.38945" y="2.25957" width="70.0406" height="70.0406" rx="35.0203" stroke="#4B9B44" strokeWidth="2.25938" shapeRendering="crispEdges"/>
              <path d="M32.6263 45.2798V42.7765L38.4753 37.3607C38.9728 36.8793 39.39 36.4461 39.727 36.061C40.0693 35.6758 40.3287 35.2987 40.5053 34.9297C40.6818 34.5552 40.77 34.1514 40.77 33.7181C40.77 33.2367 40.6604 32.8222 40.4411 32.4745C40.2218 32.1215 39.9222 31.8514 39.5425 31.6642C39.1627 31.4716 38.7321 31.3753 38.2507 31.3753C37.7479 31.3753 37.3093 31.477 36.9349 31.6802C36.5604 31.8835 36.2716 32.175 36.0683 32.5548C35.8651 32.9345 35.7635 33.3865 35.7635 33.9107H32.4659C32.4659 32.8356 32.7092 31.9022 33.196 31.1106C33.6827 30.3189 34.3647 29.7065 35.2419 29.2732C36.1192 28.8399 37.1301 28.6233 38.2748 28.6233C39.4515 28.6233 40.4758 28.8319 41.3477 29.2491C42.2249 29.661 42.9069 30.2333 43.3937 30.9661C43.8804 31.6989 44.1238 32.5387 44.1238 33.4855C44.1238 34.1059 44.0008 34.7184 43.7547 35.3228C43.514 35.9272 43.0834 36.5985 42.463 37.3367C41.8425 38.0695 40.9679 38.9494 39.8393 39.9764L37.4403 42.3272V42.4395H44.3404V45.2798H32.6263Z" fill="#4B9B44"/>
            </g>
            <defs>
              <filter id="filter0_d_367_10744" x="0.00039053" y="0.000195265" width="76.8195" height="76.8186" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1.12969"/>
                <feGaussianBlur stdDeviation="1.12969"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_367_10744"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_367_10744" result="shape"/>
              </filter>
            </defs>
          </svg>
        );
      case 3:
        return (
          <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[72.3px] h-[72.3px]">
            <g filter="url(#filter0_d_367_10762)">
              <rect x="2.25977" y="1.12988" width="72.3" height="72.3" rx="36.15" fill="#F0FDFA" shapeRendering="crispEdges"/>
              <rect x="3.38945" y="2.25957" width="70.0406" height="70.0406" rx="35.0203" stroke="#0F6396" strokeWidth="2.25938" shapeRendering="crispEdges"/>
              <path d="M38.369 45.5044C37.1709 45.5044 36.1038 45.2985 35.1677 44.8866C34.237 44.4694 33.5015 43.8971 32.9613 43.1696C32.4264 42.4368 32.1509 41.5917 32.1349 40.6343H35.6331C35.6545 41.0354 35.7855 41.3885 36.0262 41.6933C36.2723 41.9929 36.5986 42.2256 37.0051 42.3914C37.4116 42.5572 37.8689 42.6401 38.3771 42.6401C38.9066 42.6401 39.3746 42.5465 39.7811 42.3593C40.1877 42.1721 40.5059 41.9127 40.7359 41.581C40.9659 41.2494 41.0809 40.8669 41.0809 40.4337C41.0809 39.9951 40.9579 39.6073 40.7119 39.2703C40.4712 38.928 40.1235 38.6605 39.6688 38.468C39.2195 38.2754 38.6846 38.1791 38.0641 38.1791H36.5317V35.6277H38.0641C38.5883 35.6277 39.051 35.5368 39.4522 35.3549C39.8587 35.173 40.1743 34.9216 40.3989 34.6007C40.6236 34.2744 40.7359 33.8947 40.7359 33.4614C40.7359 33.0495 40.637 32.6885 40.4391 32.3782C40.2465 32.0627 39.9737 31.8166 39.6207 31.6401C39.273 31.4636 38.8665 31.3753 38.4011 31.3753C37.9304 31.3753 37.4998 31.4609 37.1094 31.6321C36.7189 31.7979 36.406 32.0359 36.1706 32.3461C35.9353 32.6564 35.8096 33.0201 35.7935 33.4373H32.4639C32.4799 32.4906 32.75 31.6561 33.2742 30.934C33.7984 30.2119 34.5045 29.6476 35.3924 29.2411C36.2856 28.8292 37.2939 28.6233 38.4172 28.6233C39.5511 28.6233 40.5434 28.8292 41.3938 29.2411C42.2443 29.653 42.9049 30.2093 43.3756 30.91C43.8517 31.6053 44.087 32.3863 44.0817 33.2528C44.087 34.1728 43.8008 34.9404 43.2232 35.5555C42.6508 36.1706 41.9047 36.5611 40.9846 36.7269V36.8553C42.1935 37.0104 43.1135 37.4303 43.7447 38.1149C44.3812 38.7942 44.6968 39.6447 44.6914 40.6664C44.6968 41.6024 44.4267 42.4342 43.8811 43.1616C43.3408 43.8891 42.5947 44.4614 41.6426 44.8786C40.6905 45.2958 39.5993 45.5044 38.369 45.5044Z" fill="#0F6396"/>
            </g>
            <defs>
              <filter id="filter0_d_367_10762" x="0.00039053" y="0.000195265" width="76.8195" height="76.8186" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1.12969"/>
                <feGaussianBlur stdDeviation="1.12969"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_367_10762"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_367_10762" result="shape"/>
              </filter>
            </defs>
          </svg>
        );
      case 4:
      default:
        return (
          <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[72.3px] h-[72.3px]">
            <g filter="url(#filter0_d_367_10782)">
              <rect x="2.25977" y="1.12988" width="72.3" height="72.3" rx="36.15" fill="#EEF2FF" shapeRendering="crispEdges"/>
              <rect x="3.38945" y="2.25957" width="70.0406" height="70.0406" rx="35.0203" stroke="#84B42A" strokeWidth="2.25938" shapeRendering="crispEdges"/>
              <path d="M31.837 42.3914V39.6554L38.697 28.848H41.0559V32.635H39.6598L35.3352 39.4789V39.6073H45.0836V42.3914H31.837ZM39.724 45.2798V41.557L39.7882 40.3454V28.848H43.0456V45.2798H39.724Z" fill="#9CBF3C"/>
            </g>
            <defs>
              <filter id="filter0_d_367_10782" x="0.00039053" y="0.000195265" width="76.8195" height="76.8186" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1.12969"/>
                <feGaussianBlur stdDeviation="1.12969"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_367_10782"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_367_10782" result="shape"/>
              </filter>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className="w-[72.3px] h-[72.3px] flex items-center justify-center shrink-0 select-none transition-transform duration-300 group-hover:scale-105">
      {renderSvg()}
    </div>
  );
};
