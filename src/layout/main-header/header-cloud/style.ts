import styled from "styled-components"

import cloudOne from "@/assets/img/cloud_one.png"
import cloudTwo from "@/assets/img/cloud_two.png"
import cloudThree from "@/assets/img/cloud_three.png"

export const CloudWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--color-primary);

  .header-cloud__box {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    will-change: transform, opacity; /* 提示浏览器启用硬件加速 */
  }

  .header-cloud__box--one {
    opacity: 0.2;
    background: url(${cloudOne}) top;
    background-size: 33% 120%;
    animation: cloud-run__one 70s linear infinite;
    z-index: 3;
  }

  .header-cloud__box--two {
    opacity: 0.2;
    background: url(${cloudTwo}) top;
    background-size: 33% 150%;
    animation: cloud-run__two 100s linear infinite;
    z-index: 2;
  }

  .header-cloud__box--three {
    opacity: 0.2;
    background: url(${cloudThree}) top;
    background-size: 50% 120%;
    animation: cloud-run__three 130s linear infinite;
    z-index: 1;
  }

  @keyframes cloud-run__one {
    0% {
      transform: translateX(0%);
    }
    10% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(50%);
      opacity: 0;
    }
  }

  @keyframes cloud-run__two {
    0% {
      transform: translateX(50%);
    }
    10% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes cloud-run__three {
    0% {
      transform: translateX(-50%);
    }
    10% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(0%);
      opacity: 0;
    }
  }
`
