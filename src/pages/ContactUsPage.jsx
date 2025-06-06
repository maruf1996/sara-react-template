import React from "react";
import PageHeader from "../component/PageHeader";
import { Link } from "react-router-dom";
import mapImage from "../assets/images/map.png";

const ContactUsPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Contact Us", link: null },
  ];
  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs}></PageHeader>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact_us_item">
                <span>
                  <svg
                    width="67"
                    height="68"
                    viewBox="0 0 67 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2502_3076)">
                      <path
                        d="M53.1289 4.55664H45.2773H37.4258C29.8502 4.55664 23.5547 10.7213 23.5547 18.2969C23.5547 25.2073 28.8133 30.9426 35.4629 31.8972V37.9258C35.4629 38.7193 35.9401 39.4363 36.6744 39.7391C37.3984 40.0413 38.2477 39.8792 38.8137 39.3135L45.2773 32.8499L46.0901 32.0371H53.1289C60.7045 32.0371 67 25.8725 67 18.2969C67 10.7213 60.7045 4.55664 53.1289 4.55664Z"
                        fill="url(#paint0_linear_2502_3076)"
                      />
                      <path
                        opacity="0.1"
                        d="M53.1289 32.0371C60.7045 32.0371 67 25.8725 67 18.2969C67 10.7213 60.7045 4.55664 53.1289 4.55664H45.2773V32.8499L46.0901 32.0371H53.1289Z"
                        fill="white"
                      />
                      <path
                        d="M49.9883 49.7031V57.5547C49.9883 60.9701 47.1997 63.4434 44.1271 63.4434C32.8195 63.4434 21.7881 58.0978 13.5832 49.9256C5.37832 41.7534 0 30.7547 0 19.4471C0 16.1992 2.64205 13.5859 5.88867 13.5859H13.7402C14.5856 13.5859 15.3354 14.1264 15.6011 14.9272L19.5268 26.6771C19.7192 27.2529 19.6341 27.8836 19.2991 28.3874L15.9701 33.3823C17.2316 36.0283 19.464 38.9203 22.042 41.4668C24.6212 44.0121 27.5459 46.2118 30.1919 47.4733L35.1868 44.1442C35.6932 43.8105 36.3213 43.7229 36.8971 43.9165L48.6745 47.8423C49.4753 48.1079 49.9883 48.8578 49.9883 49.7031Z"
                        fill="url(#paint1_linear_2502_3076)"
                      />
                      <path
                        opacity="0.2"
                        d="M49.9871 49.7031V57.5546C49.9871 60.9701 47.1985 63.4433 44.1259 63.4433C32.8184 63.4433 21.7869 58.0977 13.582 49.9255L22.0408 41.4668C24.62 44.012 27.5447 46.2118 30.1907 47.4732L35.1856 44.1442C35.692 43.8105 36.3202 43.7228 36.8959 43.9165L48.6733 47.8423C49.4741 48.1079 49.9871 48.8577 49.9871 49.7031Z"
                        fill="url(#paint2_linear_2502_3076)"
                      />
                      <path
                        d="M37.4238 20.2598C38.5079 20.2598 39.3867 19.3809 39.3867 18.2969C39.3867 17.2128 38.5079 16.334 37.4238 16.334C36.3398 16.334 35.4609 17.2128 35.4609 18.2969C35.4609 19.3809 36.3398 20.2598 37.4238 20.2598Z"
                        fill="white"
                      />
                      <path
                        d="M45.2754 20.2593C46.3595 20.2593 47.2383 19.3805 47.2383 18.2964C47.2383 17.2123 46.3595 16.3335 45.2754 16.3335C44.1913 16.3335 43.3125 17.2123 43.3125 18.2964C43.3125 19.3805 44.1913 20.2593 45.2754 20.2593Z"
                        fill="white"
                      />
                      <path
                        d="M47.2402 18.2964C47.2402 17.2123 46.3614 16.3335 45.2773 16.3335V20.2593C46.3614 20.2593 47.2402 19.3804 47.2402 18.2964Z"
                        fill="white"
                      />
                      <path
                        d="M53.127 20.2593C54.211 20.2593 55.0898 19.3805 55.0898 18.2964C55.0898 17.2123 54.211 16.3335 53.127 16.3335C52.0429 16.3335 51.1641 17.2123 51.1641 18.2964C51.1641 19.3805 52.0429 20.2593 53.127 20.2593Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2502_3076"
                        x1="22.6387"
                        y1="7.32779"
                        x2="70.4721"
                        y2="11.8584"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9FE871" />
                        <stop offset="1" stopColor="#6BD723" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2502_3076"
                        x1="1.41811"
                        y1="55.773"
                        x2="55.5535"
                        y2="49.5265"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6427FF" />
                        <stop offset="1" stopColor="#7D51ED" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_2502_3076"
                        x1="14.6148"
                        y1="60.0623"
                        x2="53.1639"
                        y2="52.7132"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6427FF" />
                        <stop offset="1" stopColor="#7D51ED" />
                      </linearGradient>
                      <clipPath id="clip0_2502_3076">
                        <rect
                          width="67"
                          height="67"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <div className="contact_us_txt">
                  <h6>Contact Info</h6>
                  <p>Open a chat or give us call at</p>
                  <a href="tel:+17077970462"> +1 707 797 0462 </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact_us_item">
                <span>
                  <svg
                    width={75}
                    height={68}
                    viewBox="0 0 75 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <mask
                      id="mask0_2493_25105"
                      style={{
                        maskType: "alpha",
                      }}
                      maskUnits="userSpaceOnUse"
                      x={7}
                      y={0}
                      width={68}
                      height={68}
                    >
                      <rect
                        x={7.04297}
                        y={0.0219727}
                        width={67.9557}
                        height={67.9557}
                        fill="url(#pattern0_2493_25105)"
                      />
                    </mask>
                    <g mask="url(#mask0_2493_25105)">
                      <rect
                        x={8.80078}
                        y={-5.25049}
                        width={68.5415}
                        height={73.2281}
                        fill="url(#paint0_linear_2493_25105)"
                      />
                    </g>
                    <circle
                      cx={15}
                      cy={15.022}
                      r={15}
                      fill="url(#paint1_linear_2493_25105)"
                    />
                    <path
                      d="M8.38281 15.903L14.1181 20.3148L22.0593 9.72656"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <defs>
                      <pattern
                        id="pattern0_2493_25105"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_2493_25105"
                          transform="scale(0.00195312)"
                        />
                      </pattern>
                      <linearGradient
                        id="paint0_linear_2493_25105"
                        x1={10.7452}
                        y1={56.7118}
                        x2={85.0985}
                        y2={48.7025}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6427FF" />
                        <stop offset={1} stopColor="#7D51ED" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2493_25105"
                        x1={-0.63253}
                        y1={2.37491}
                        x2={32.4974}
                        y2={4.92686}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9FE871" />
                        <stop offset={1} stopColor="#6BD723" />
                      </linearGradient>
                      <image
                        id="image0_2493_25105"
                        width={512}
                        height={512}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d15uF1Vff/x9w0JCQmEIcxjEmYcAEFBAgoIMoMj8AMEJ1BrW7W20v5sawfbaqtSbR2Koggqs7aCDEoVUAYhzBBmCCEEkkACIQmZ0z/WjWS6955z7jnnu/Ze79fzrAfqUx8/95x79/rutb577R4kVckIYMxKYzNg09X+szHA+sDI3v/O+sAwoAfYqPc/WxcY1fvv84BFvf8+u/efi4G5vf8+v/ffX1xtvADMXO0/W9CuH1RSZ/VEB5C0iuHANsD4tYytga3iojVkNvAcMA14crXxGDAnLpqklVkASDE2A/YE3gC8EdgdGAdsHhmqC6YDk4FJwP3Afb1jZmAmqUgWAFJnDQN2AfYAXgfs0/vv4yNDZWg2qSi4E3hwpX9/NTKUVGcWAFJ7bQi8GTgQmND7zxGhiaprCXAvcDPwO+AGXCmQ2sYCQBqc8aw62e+Of1ed9CSpILiTVBTcBSwPTSRVlBcqqTlbAUcBRwKHkjruFecF4NfANcC1wPOxcaTqsACQ+rcOsBdwHHAs8Cb8u8nZJOBK4HrgJl57vFHSaryQSWvaEjiGdJd/OGlfX9XzEvAr0srAL0hPIEiStIpNgNNJd4+LSfvKjvqMpaSegU+RCjypeK4AqGQbk5b23w8cQXpkT/W3FLgNuAy4CJgRG0eS1A0bAR8kNY0tIv7O1BE7FpG2B87ArR5JqqV9gP8inWkfPek48hyvApcCh+HqqCRV2kbAWaTDZKInF0e1xsPA2aQjmyVJFbHibn8+8ROJo9pjAa4KSFLWRgOfJb1xLnrScNRzPAr8Gel3TZIUbCvg74BZxE8QjjLGHODrwPZIkrpuL+AC7OR3xI2lpHMj9kOS1HEHki66y4ifAByOFeN3pDMl7BOQpDYaApxCek989IXe4ehv3A+cTPqdlSS1qId0V3U38Rd2h6OZ8SDphElXBCSpSYcBE4m/kDscgxn3YSEgSQ05ELiR+Au3w9HOcStpNUuStJoDSe9vj75QOxydHDcAByBJYlvS43x29TtKGlcCY5GkAo0kHeDjcb2OUsd84EvABkhSAXpITVGTib8AOxw5jKnA6dgoKKnG9iUdmBJ9wXU4chy3A29FkmpkU+B83Od3OAYaS4HzgE2QpIp7PzCD+Aurw1GlMZ20LSBJlbM18DPiL6QOR5XHL/Ctg+qQdaIDqHZ6gLOAnwN7BmeRqm5n0t/TUtJhQstj46hO7DpVO+0MnAscHJxDqqNbgDOBSdFBVA+uAKgdhgKfBy4GdgzOItXVdsBHSc20t+BqgAbJFQAN1g7AhcBB0UGkgvweOBV4IjqIqst3Vmsw3k96Va+Tv9Rd+wF3AR+IDqLqcgVArRgNfBM4LTqIJC4DPgbMjg6iarEAULP2B34MjI8OIukPppBWA26KDqLqsAlQjRoK/C3pRL8xsVEkrWZD0sFBI4EbSY2CUr9cAVAjNid1+B8SHUTSgH4LnAQ8Fx1EebMA0EAmkPYYt4oOIqlh00hNurdEB1G+3AJQf84CLgE2ig4iqSkbAGcAi4Cbg7MoU64AaG1GAN8CPhQdRNKg/ZhUzM+PDqK8WABoddsDVwD7RgeR1Db3AO8FnowOonx4EJBWdjTpQuHkL9XLXsDtwDujgygf9gBohbNIR/qOig4iqSNGAqcALwJ3BGdRBiwA1AP8HfAVXBGS6m4IaaVvE+CX+EKhotkDULYRwA+BE6ODSOq6n5GO87Y5sFAWAOUaA/wP6Tl/SWX6PXA8MCM6iLrPAqBMOwFXAztHB5EU7kngGODh6CDqLvd8yzMBuBUnf0nJeNKJgW+PDqLusgAoy7HA9cCm0UEkZWVj4DrgXdFB1D0+BVCOk0jH+g6PDiIpS0OB9wFPAfcFZ1EXWACU4TTgAmBYdBBJWRsCnABMBe4OzqIOswCov08A38XvWlJjhpCeDHiJ9JSAaspJod7OBs7Bpz0kNacHOJJ0UNCNwVnUIRYA9XU28KXoEJIq7RBgPVLzsGrGAqCevgL8bXQISbVwIOkdIb+KDqL2sgCony+S7v4lqV0mkLYFbgjOoTayAKiXzwD/FB1CUi0dDCwAbg7OoTaxAKiPPwa+Hh1CUq0dBswBbosOosGzAKiHM4DvYLe/pM57J/AscFd0EA2OBUD1vRe4EL9LSd3RQ3p50KPAA8FZNAjeMVbbCcBleMKfpO5bTLoBuTI6iFpjAVBdBwPX4tn+kuIsAA4HfhcdRM2zAKim3UmduBtHB5FUvFnAAcAj0UHUHAuA6tkUuBXYKTqIJPV6CtgfmBEdRI0bEh1ATVkP+DlO/pLyMg64ChgZHUSNswCojiHAj4C3RgeRpLV4M/BDnFcqw0fHquNrwIeiQ0hSP/bAlwdVhgVANXyMdMa/JOVuAvACcEd0EPXPJsD8HU3a97dYk1QVS0iHBf0yOoj6ZgGQt7HARGBMcA5JatYsUl/Ak9FBtHY2a+RrPeAKnPwlVdMmwE/xyYBsWQDk69vAm6JDSNIg7An8V3QIrZ37ynn6FPCX0SEkqQ3eSDogaGJ0EK3KHoD8vBW4AVg3OIcktcti4FB8Z0BWLADysiVwJ7B1dBBJarPngX2AadFBlNgDkI9hwOU4+Uuqpy2BnwBDo4MosQcgH/8InBodQpI6aCywnLTNqWBuAeThQNIfhAWZpLpbRuoHuDE6SOksAOJtCNwL7BAdRJK65ClgL2BOdJCS2QMQ79s4+UsqyzjgP6NDlM4l51inA38THUKSAuwJPAbcHx2kVG4BxBkH3AOMjg4iSUFeJm0FTA7OUSS3AGIMBX6Ek7+ksm0IXIir0SH80GN8nrT8L0ml2x5YgKcEdp1bAN23G3A3MCI6iCRlYiHp5WeTooOUxC2A7hoCfA8nf0la2XDStdE5qYvcAuiuPwY+Fh1CkjK0Hel9Ab41sEvcAuie7YEHgA2ig0hSpuYArwOmRgcpgcst3fOfOPlLUn9GA9+JDlEKC4DuOBU4LjqEJFXAMcD7o0OUwC2AzhtD6mzdPDqIJFXE88AewOzoIHVmE2DnfQc4IDqEJFXI+qSbpyujg9SZKwCdtT9wC37OktSsZaRr6B3RQerKHoDO6QG+gpO/JLViCPDveA3tGAuAzjkNmBAdQpIq7ADgxOgQdWVl1RkjgYdIz/5Lklo3FdgVmB8dpG5sAuyMv8XH/iSpHUaT3hVwU3SQunEFoP22Ax4mrQJIkgbvVdKL1KZEB6kTewDa76s4+UtSO60H/HN0iLpxBaC9DiQtU/m5SlJ7LSc1Bd4WHaQuXAFory/i5C9JndBDusaqTSwA2uedwNujQ0hSjb0DOCQ6RF14t9o+t5JOrZIkdc7NpO1WDZIrAO1xHE7+ktQNE4AjokPUgSsAg9cD3AnsHR1EkgpxJ/BmUmOgWuQKwOC9Byd/SeqmfYBjo0NUnSsAgzMEuBt4Y3QQSSrM/cBepLcGqgWuAAzOyTj5S1KEN5BWYNUiVwBa1wM8AOwRHUSSCnUfaRXAXoAWuALQuqNx8pekSG8EDo8OUVUWAK37bHQASZLX4la5BdCafYCJ0SEkSUB6Euue6BBV4wpAa6w4JSkfn4kOUEWuADRvW+BJYFh0EEkSAIuBHYFnooNUiSsAzfsMTv6SlJNhwB9Hh6gaVwCaMxqYAmwYHUSStIo5wPbAy9FBqsIVgOaciZO/JOVoNPDh6BBV4gpA43qAR4Cdo4NIktbqUWA3PBioIa4ANO5QnPwlKWe7AG+LDlEVFgCNOzM6gCRpQF6rG+QWQGPGAM8Cw6ODSJL6tQDYBpgVHSR3rgA05oM4+UtSFYwATosOUQWuADTmQXzxjyRVxQOk1wWrH64ADOwgnPwlqUpeD+wfHSJ3FgADs6FEkqrHa/cA3ALo30bANGC96CCSpKbMA7YCXokOkitXAPr3bpz8JamKRgHHR4fImQVA/06KDiBJapnX8H64BdC3McBz+OY/Vcsy4AngIeApYDLpFakzgRd7x0JgEWmJFNKd0rqkR13H9I7NgO2Acb1jd2A83jSoWhYCWwIvRQfJ0dDoABl7N07+yt9k4GbgFmAi6ZHVef39F9Zi3kr/nef7+f8bRequ3hc4AJgA7NDk/5bUTcOBdwHnB+fIkisAffsVcFh0CGk1c4HrgWt7x9OxcRgLHAkcBbyDVCRIObkGODo6RI4sANZuc9LRv66QKAfzgKuAS0kXs1dj4/RpPdKF9kTgWGBkbBwJgMWkpwFejA6iavgj0uskHY7I8SBwNrAJ1TMaOAu4k/jP0eH4KFKDfkP8L6yjzLEYuAR4C/WxH2n1Ygnxn6+jzPErtAa3ANa0JTAVWCc6iIqyCPge8G+kxr46Gg/8BfBh0lMHUrcsAbYmPQ2jXj7Ss6ZjcPJX9ywhTfy7AJ+kvpM/wJPAJ4BdgR8AS2PjqCBDsRFwDRYAazoqOoCKcSfpcbozie/m76bJpFWAfYFbY6OoIEdGB8iNWwCrGkpaItooOohqbTbw98B/kA7uKVkP8AHgK6TDh6ROmU36HXPlqZcrAKs6ACd/dc5y4ELSEvjXcfKH9JlcAOwGfAM/E3XOxtSruXbQLABW5RKROmUKcAhwOjYirc0s4FOkw7emBmdRfbnFuxILgFX5y6FOuBjYE7gxOkgF/Ib0WV0eHUS15E3eSuwBeM1WpNP//EzULkuAvwa+HB2kos4i9Un4yKDaZRnpWj8jOkgOXAF4zZE4+at9pgFvx8l/MM4lvV+gvxcUSc0YAhwRHSIXFgCv8RlRtcsTwNtIb+jT4PwOeCvwSHQQ1YbbAL284016SI1ZY6KDqPJuJx0m9UJ0kJrZDLiadHaANBjTSSe+Fs8VgGQ3nPw1eL8mdbE7+bffTOBg0iuQpcHYAtgpOkQOLACSCdEBVHk/JW0jvRIdpMbmAScAF0UHUeV5zccCYIUDogOo0i4C3g8sjA5SgEXAaaRHK6VWWQBgAbDCgdEBVFn/C3wIT7DrpmWkA5XcDlCrvOZjEyCk5qLp+FmoeXcAhwJzo4MUaiRwPekpAakZy0m9AEWfyukKQKoEnfzVrMeBY3HyjzQfOB54ODqIKqcH2D86RDQLAPf/1bxppG5/TxOL9wKp+dLDgtSs4vsALADcC1JzFgMnA09HB9EfPAW8h9QgKDXKAiA6QLDhwN7RIVQpnwJ+Gx1Ca7gV+IvoEKqUfSn8PROlFwC7k4oAqREXA9+ODqE+fQPfIqjGjSAdAles0guAPaMDqDKmAp+MDqEBnQlMiQ6hynhDdIBIpRcAr48OoEpYRjp8ZlZ0EA3oJdK5DMujg6gS3hgdIFLpBYArAGrEecCN0SHUsF8D340OoUooegWg9OffnycdBiH1ZRawK77gp2pGA5OAbaKDKGvPAttGh4hS8grA5jj5a2Bn4+RfRXOAz0SHUPa2oeA3wZZcALj8r4HcAXw/OoRadhlwQ3QIZa/YbYCSC4Cimz80oKXAx/AlP1X3adJ3KfWl2Lmg5ALAJwDUnx8Ad0eH0KDdC/woOoSy5gpAgXaPDqBsLQK+GB1CbfMPpCOcpbUpdi4ouQAYFx1A2foenvVfJ08C50eHULaKnQtKfQxwFL7GVWu3FNiFNGmoPsYBjwHrRAdRdpYDI4EF0UG6rdQVgLHRAZSty3Hyr6OngP+ODqEs9QA7RIeIYAEgreqc6ADqmK9GB1C2itwGKLUAKPLL1oDuBX4fHUIdcys+2aG1GxsdIEKpBcDY6ADKkq/6rb/zogMoS0XeFFoASMk84KLoEOq4HwOvRodQdiwAClLkl61+XUk6P1719hJwTXQIZWdsdIAIFgBScml0AHXNJdEBlJ0i54QSzwEYgUuAWtVc0tsh/b0ow0hgBuk8EGmF4aRTQItR4grAptEBlJ3rcfIvyXx8S6DWVNxrgS0AJPeES+R3rtUVNzeUWABsEh1A2bkuOoC67troAMqOKwAF2Cw6gLLyFL74p0RPAM9Eh1BWXAEoQHFVnvp1c3QAhfG718qKmxssAFS6W6MDKIwFgFbmCkABivuS1a+J0QEU5s7oAMpKcTeHJRYAxX3J6tMy4MHoEApzP+ld8BIUODdYAKhkj5PeAaAyzSU1gUpQ4OpwiQXA+tEBlI2HowMo3EPRAZSN4uaGEguA4dEBlA3v/jQ5OoCysW50gG4rsQAo7ktWnyZHB1A4i0CtUNzNoQWASuZBMJoSHUDZsAAoQHFfsvo0MzqAwr0QHUDZKO7msMQCoLgvWX3y4i9/B7RCcXODBYBKNjs6gMLNig6gbBS3OlxiAVDcl6w+zY8OoHD+DmiF4m4OSywAivuS1adF0QEUbmF0AGWjuJtDCwCVzAJAFgBawQKgAD3RASRJ2SlubiixAFgSHUDZcDVIxd31qU+LowN0mwWASmYBIAsArVDc3FBiAVBclac+jYwOoHD+DmiF4uaGEguApdEBlI1NogMonK8H1wquABSguC9ZfSru/d9ag78DWsEVgAL46JdW8OIvVwC0ggVAAeZFB1A2to8OoHA7RAdQNuZGB+i2EguAV6IDKBte/DUuOoCyUdzcYAGgknnx19joAMqGKwAFKO5LVp92jw6gcHtEB1A2irs5tABQyXYE1o8OoTAb4DaQXlPc3FBiAVBclac+DQFeFx1CYd5Agee/q08WAAWYHR1AWdk3OoDC7BMdQFmZFR2g20osAGZGB1BWDogOoDAHRgdQVmZEB+g2CwCVbkJ0AIWx+NPKipsbLABUuh3wUbAS7QRsGx1CWXkhOkC3WQBIcGR0AHWd37lWNz06QLdZAEhwVHQAdZ3fuVZX3NxQ4iMw65HeB1Diz661mwtsDrwaHURdMYrU8DUyOoiysYw0NxT1srgSVwBepcC9HvVrfeDo6BDqmuNw8teqplPY5A9lFgAAz0QHUHZOjA6grjkpOoCyMyU6QIRSC4Aiv2z161hgdHQIddzG2ACoNU2NDhDBAkBKRgKnRIdQx50GjIgOoew8HR0gQqkFgFsAWpuPRwdQx304OoCyVOScUGoB4AqA1mZPYL/oEOqYA4C9okMoS24BFOSJ6ADK1mejA6hj/jw6gLL1eHSACKU+C78B8DLl/vzq21JgVywS62Zn4GHKvelR35aTGoB9HXAhXgGejw6hLK2Dd4p1dDblXu/Uv2cpcPKHsv8gHo0OoGx9BBgfHUJtsxNwRnQIZeuR6ABRLACkNQ0D/jo6hNrmC8DQ6BDK1mPRAaKUXAAU+6WrIWcAb4kOoUHbG893UP+KvRksuQCYFB1AWRsCfIOy/0aqrgf4On6H6t9D0QGilPyHcW90AGVvP+Cj0SHUspOAg6JDKHvFzgWlPwY3E9g0OoSyNgvYjQLfFV5xGwIPAttEB1HWZpJeBV6kklcAAO6PDqDsbQJ8KTqEmvYVnPw1sHuiA0QqvQAodulHTfkQcEh0CDXscNKjnNJAir4JtACQBtYDXAiMiQ6iAW0MnIfbm2qMKwAFK/rLV1O2Ab4THUL96gF+AGwXHUSVUfRNYOkFwAPAvOgQqoz3AX8aHUJ9+ixwQnQIVcY8Cn8cvPQCYAlwV3QIVcpXgbdFh9AaDgb+JTqEKuUO0hxQrNILAIDfRwdQpQwFLgHGBufQa8aTvhOP+1Uzir/2WwD4S6DmbQlcD2wRHURsBlxNwc9yq2W3RQeIZgHgL4FasyNwFbBBdJCCbQBcA+waHUSVdHt0gGgWADCV9D5oqVn7AlcA60YHKdC6wE+BfaKDqJKmANOiQ0SzAEhuig6gyjoc+CH+LXXTEOAC4LDoIKqs30YHyIEXreTG6ACqtJOBy4AR0UEKsC7wY9KLfqRW/SY6QA48LSvZBXgkOoQq79fAu4E50UFqan3gcuCI6CCqvJ2AJ6JDRLMAeM1UfHmIBu9O4GhgRnSQmtkC+AXu+WvwpuJpkYBbACtzG0DtsA9wK+kOQ+0xjtSn4+SvdnD5v5cFwGv8pVC7jCc1GR0UHaQGDiY9qrtLcA7Vhzd7vSwAXnN9dADVypaknoCzo4NU2FnAL/GQH7WX1/pe9gCsahKwe3QI1c7lwMeAWdFBKmJT4Hv4Yh+134PA66ND5MIVgFVdEx1AtfQ+0mtHD40OUgGHkz4rJ391gtf4lVgArOra6ACqrW1JS48XAJsEZ8nRhsDXSX+DWwdnUX1dHR0gJ24BrGo48CIwKjqIam0a8GnS4UGl6yEd6nMOqW9C6pRXSNtLi6KD5MIVgFUtJDVuSZ20NXApcAOwV2yUUHuTPoOLcPJX512Pk/8qLADWdFV0ABXj7cBE4HzSo4Ol2Im0FTIReFtwFpXDa/tq3AJY0+akJdp1ooOoKItJhcCXqe8RpTuTHos8AxganEVlWQJsBbwQHSQnrgCsaQbwu+gQKs4w4EzgUdJjg2+NjdNWB5Bem/ww8BGc/NV9N+HkvwYLgLX7aXQAFWsI8F7gFtK5FGcDY0ITtWZD0kE+dwE3A+/B643iXBEdIEduAazddsDT+PkoD6+Snl++hLSPOT82Tp9GAceSuvqPwtcjKw/LSNf0adFBcuME17fbgP2iQ0irmU96UuUa4Dri+wV2Ao7sHYcAI2PjSGu4BZgQHSJH7sX17XIsAJSfkaS77GN7/++ppJ6Vm0mvIn6A9LxzJ2xAOkZ1X9IF9UB8hbbyd3l0gFy5AtC3bYApuG+palkOPAU81PvPycAzpObWF3vHq6Su6BWFwgakm4H1SP0GY0hPw2xHehXvOGC33n96zVCVLCX9Hj8XHSRH/jH373rgHdEhJEktuY60PaW18O62fz+ODiBJapnX8H64AtC/0cDzpKVRSVJ1zAe2AOZGB8mVKwD9mwNcGR1CktS0n+Hk3y8LgIFdEB1AktS0C6MD5M4tgIENIXVTbx8dRJLUkCmkF2wtjQ6SM1cABrYM+EF0CElSw76Lk/+AXAFozLak56l9Q6Ak5W0p6cyKZ6KD5M4VgMZMJT1PKknK29U4+TfEAqBx340OIEkakNfqBrkF0LihpGbAbaODSJLWagqwI+moaw3AFYDGLQG+FR1CktSnb+Lk3zBXAJqzMWlvaVR0EEnSKuaTHtd+MTpIVbgC0JzZwE+iQ0iS1vBDnPyb4gpA814H3I+fnSTlYjnp2vxQdJAqcQWgeQ8C/xsdQpL0B9fh5N80C4DWfC06gCTpD86JDlBFLmO3biKwT3QISSrc3aRr8fLoIFXjCkDr/jU6gCSJL+Lk3xJXAFq3DjAJ2CU6iCQV6mFS89+y6CBV5ApA65biKoAkRfoSTv4tcwVgcIYBj5MOn5Akdc8zwE7AouggVeUKwOAsxlUASYrwTzj5D4orAIM3DHiE9P5pSVLnTQZ2xQJgUNaJDlADy4C5wPHRQSSpEJ8G7ooOUXWuALTHOqQTAneNDiJJNfcoqfPft/4NkisA7bGc9KKg90QHkaSa+yTpfSwaJFcA2mcIcC/w+uggklRT9wF746N/beFTAO2zDPhcdAhJqrG/wMm/bSwA2usa4JfRISSphq7F62tbuQXQfnuQtgKGRgeRpJpYSlr6d++/jVwBaL9JwPnRISSpRs7Dyb/tXAHojM2Bx4DR0UEkqeLmkl669lx0kLrxMcDOmEf6bA+NDiJJFff3pP4qtZkrAJ2zLumRFQ8HkqTWPA68AVgQHaSO7AHonEXAn0SHkKQK+1Oc/DvGAqCzfgX8NDqEJFXQ5bj031FuAXTedsBDwKjoIJJUEfNJj1Q/HR2kzmwC7Lw5pJOrDosOIkkV8Xng6ugQdecKQHcMBX4PvCk6iCRl7l7gzcDi6CB1Zw9AdywBPoy/0JLUnyXAR/Ba2RVuAXTPdGB9YEJ0EEnK1JeBH0WHKIVbAN01HLgH2C06iCRl5lFgL+DV6CClcAuguxYCH8fXWUrSypYBZ+Hk31VuAXTf08DGwP7RQSQpE+cA50aHKI1bADGGAxOB10cHkaRgDwH74N1/17kFEGMhcDp2ukoq2xLgDJz8Q7gFEOd5UgF2cHAOSYryBeDi6BClcgsg1lDgZuAt0UEkqctuAw4irQIogAVAvPHAXcCG0UEkqUteBvYGnooOUjJ7AOI9CZwZHUKSuugTOPmHswcgD5OAbfFdAZLq71zgX6JDyC2AnIwgvTDojdFBJKlDJpFe9DM/OojcAsjJAuBU/MOQVE/zgZPwGpcNtwDyMoP00qDjo4NIUpt9HLguOoReYwGQn7uBHYE9o4NIUptcAnw+OoRWZQ9AnkYBdwC7RweRpEF6DNgXmBMdRKuyByBP84ATca9MUrUtIF3LnPwz5BZAvmYALwDHRQeRpBb9EXB1dAitnQVA3u4EdsJHAyVVz6XAX0WHUN/sAcjf+qR+gN2ig0hSgx4nveLXpf+M2QOQv7mkPTRflympChbivn8luAVQDTOAWcAx0UEkaQB/AlwVHUIDswCojonAztgPIClflwFnR4dQY+wBqJb1SYXArtFBJGk1T5D2/V+ODqLG2ANQLfYDSMrRin1/J/8KcQugeqYDLwFHRweRpF6fAn4eHULNsQCopjtI2wBviA4iqXiXA5+LDqHm2QNQXRuQ+gF2iQ4iqVju+1eYPQDV9QpwCmnvTZK6bTFwGk7+leUWQLU9Rzps46joIJKK8xngp9Eh1Dq3AOrhCuA90SEkFeNK4ARgeXQQtc4CoB42Au4CxkUHkVR7U4C9SaeTqsLsAaiHl4CTgEXRQSTV2mLgZJz8a8EegPqYRjoo6MjoIJJq67Okx/5UA24B1EsPqR/g3dFBJNXOVcDxuO9fGxYA9WM/gKR2e4a07/9idBC1jz0A9WM/gKR2WrHv7+RfM/YA1NM00guD3hkdRFLlfQ64NDqE2s8tgPrqIR3S8a7oIJIq6xfAcbjvX0sWAPW2MakfYGxwDknV475/zdkDUG+zsR9AUvOWAP8PJ/9asweg/p4lFQCHRweRVBl/CVwcHUKd5RZAGXqAn5HO7pak/lwDHIP7/rVnAVCOjYG7gR2ig0jK1lTSvv8L0UHUSBM+XwAAC+NJREFUefYAlGM26VnexdFBJGVpxb6/k38h7AEoy1RSAXBYdBBJ2fn/wEXRIdQ9bgGUpwf4H9KzvZIEcC1p339ZdBB1jwVAmTYh9QNsHx1EUrhnSfv+M6ODqLvsASjTLOA00p6fpHItBU7Hyb9I9gCUawppue/Q6CCSwvwNcEF0CMVwC6BsQ4CrgSOig0jqul+TXhi2NDqIYlgAaDPgHmDr6CCSumY6sBfwfHQQxbEHQDOBU/AuQCrFMuBUnPyLZw+AAJ7u/echoSkkdcMXgPOjQyieWwBaYQjpWWBfGiTV129If+Ou+MkCQKvYnNQPsFV0EEltN530vP9z0UGUB3sAtLIZ2A8g1dEy4AM4+Wsl9gBodZNJheHBsTEktdHfA9+PDqG8uAWgtRkCXIcvDZLq4EbgHbiyp9VYAKgvW5DeF2A/gFRdM0j7/tOigyg/9gCoL9NJzwp71yBV0zLSOz+c/LVW9gCoP5OBocDbg3NIat4/AudFh1C+3ALQQIYAvyTtIUqqBvf9NSALADViC9L5AFtGB5E0oJmkc/5d+le/7AFQI+wHkKphxfP+Tv4akD0AatRTwHDgoOggkvr0z8B3o0OoGtwCUDPWIfUDHBodRNIafkv621wSHUTVYAGgZm1DOh9gs+ggkv5gFul5/ynRQVQd9gCoWc8Cp5P2GiXFWw58ECd/NckeALXicWAkcGB0EEl8GfhWdAhVj1sAatVQ0rvFLQKkOLcBbwMWRwdR9VgAaDC2JfUDbBodRCrQbNK+/9PRQVRN9gBoMKaS+gGWRweRCrMc+BBO/hoEewA0WI8Do4AJ0UGkgvwb8J/RIVRtbgGoHYYCN2ARIHXD7aQDuRZFB1G1WQCoXbYj9QOMiQ4i1dhs4E2kN3VKg2IPgNrlGeAM7AeQOmU58GGc/NUm9gConR4DRgNvjQ4i1dDXgG9Eh1B9uAWgdhtG6gc4IDiHVCd3kM7ccN9fbWMBoE6wH0Bqn5dI+/5PRQdRvdgDoE54hnQ2uf0A0uCs2Pd38lfb2QOgTnkU2BjYPzqIVGFfB/49OoTqyS0AddIw4EZsCpRa4b6/OsoCQJ22PakfYJPoIFKFuO+vjrMHQJ02BfsBpGZ9BCd/dZg9AOqGR0lPBOwXHUSqgG8A50SHUP25BaBuGQbchE2BUn/uJL1TY2F0ENWfBYC6aUfSBW7D6CBShl4B9iWtmEkdZw+AuukJ4KPRIaRMfRwnf3WRPQDqtknA5sCbo4NIGfkm8OXoECqLWwCKMBy4hfSYk1S6+0i9Ma9GB1FZLAAUxX4ACeaS9v0fiQ6i8tgDoChPAGdGh5CCfRwnfwWxB0CRJgFbku6ApNJ8G/hSdAiVyy0ARRsO3ArsHR1E6qL7SQdjue+vMBYAysFOpH6A0dFBpC6YS3oK5uHoICqbPQDKwePYD6ByfAInf2XAHgDl4kFgG2Cf6CBSB50L/HN0CAncAlBeRpD6AfaKDiJ1wAOkff/50UEksABQfnYGJmI/gOplHmnf/6HoINIK9gAoN48BZ0WHkNrsEzj5KzP2AChHDwLb46OBqofzgC9Gh5BW5xaAcjUCuA3YMzqINAgPAm/BfX9lyAJAOduF1A+wQXQQqQXzSJP/pOgg0trYA6CcPQp8LDqE1KJP4uSvjNkDoNw9AIzFRwNVLT8A/iE6hNQftwBUBaOA24E9ooNIDXiU9IKrV6KDSP1xC0BVMA84ERuplL8FpN9VJ39lzy0AVcVM4HnghOggUj/OAq6NDiE1wgJAVXI3MB4fDVSeLgb+OjqE1Ch7AFQ1o4A7gN2jg0greYz0IiuX/lUZ9gCoauwHUG7c91cluQWgKprRO46PDiIBHweuiQ4hSSW5AFjucASOi5Eqyh4AVdn6pPMB7AdQhMdIz/vPiQ4itcIeAFXZXNLe66vRQVScBcBJOPmrwuwBUNXNAF4Ajo0OoqJ8EvhFdAhJElxI/H6wo4xxCVIN2AOgulifdD7AbtFBVGuPk573d+lflWcPgOrCfgB12kLc91eN2AOgOpkBzAaOiQ6iWvpT4MroEJKkvv2Y+H1iR73GpUg1Yw+A6mh9YCKwa3QQ1cITpH3/l6ODSO1kD4DqyH4AtctC0u+Sk79qxx4A1dV00kX76OggqrRPAz+PDiFJat5PiN8/dlRzXIZUY/YAqO42BO4CxkcHUaU8DbwJmBUdROoUewBUdy+Tnt1eGB1ElbEYOBknf9WcPQAqwTTgFeDI6CCqhD8DrogOIUlqnyuI31d25D2uxK1RFcJfdJVkI1I/wLjoIMrSFGBvXPpXIewBUEleIvUDLIoOouy476/i2AOg0kwD5gFHRAdRVv4cuDw6hCSps3qAnxG/3+zIY1yF26EqkL/0KtXGwJ3YD1C6Z0j7/i9GB5G6zR4AlWo2ac/XfoByLSH9Djj5q0j2AKhkzwILgHdGB1GIz+FrfiWpWD3AfxO/D+3o7vgFboGqcP4BSKkf4C5gbHAOdcdU0r7/C9FBpEj2AEiv9QMsjg6ijlux7+/kr+LZAyAlz5IaAg+LDqKO+ivg4ugQkqS89AD/Q/z+tKMz42rc9pT+wD8GaVWbkPoBdogOorZy319ajT0A0qpmYT9A3SwBTsHJX1qFPQDSmqaSJo13RAdRW3we+El0CElSNfQAPyd+39oxuHENrnRKa2UPgNS3zYC7gW2ig6glz5P2/Z+PDiLlyMpY6ttM0t7xkuggatoy4FSc/KU+2QMg9e9p0lLyodFB1JS/AS6IDiFJqrYhwHXE72c7Ghu/xpsbaUD2AEiN2ZzUD7B1dBD1azqwFy79SwOyB0BqzAxSP8DS6CDq0zLgNJz8pYa4TCY17unefx4SmkJ9+QJwfnQISVI9DQF+Sfw+t2PV8Ru8oZGaYg+A1LzNgXuAraKDCEj7/nsDz0UHkarEHgCpefYD5GMZ8AGc/KWmuWQmtWYy6e/n7cE5SvcPwPejQ0iSyjIE+BXx+9+ljhvwJkaSFGQLYBrxk2FpYzqeySBJCnYI6X0B0ZNiKWMp8M6GvhlJfXL5TBq8ycAw4G3BOUrxReB70SEkSYLUD3A98XfHdR834o2LJCkzW5AeR4ueJOs6ZgDbNPxtSJLURYdiP0AnxlLgiCa+B0kDcClNaq+ngBHAQdFBauZfgHOjQ0iS1J+hwE3E3zXXZdxKarKUJCl72wIziZ88qz5eBHZo8rOXJCnUUaS96+hJtKpjGXB805+6JEkZ+DLxE2lVx5da+LwlScrCUOC3xE+mVRu34b6/JKni7AdobszCfX9JUk0cTdrTjp5ccx/LgBNa/IwlScrSvxE/weY+/rXlT1eSpEwNBX5H/CSb6/g9sG7Ln64kSRnbDniB+Mk2tzELGNv6xypJUv6OwX6Alccy4F2D+kQlSaqIrxE/8eYyvjrIz1KSpMoYBtxC/OQbPW7HfX9JUmG2p+x+gNnAuEF/ipIkVdCxlNkPsAx4dxs+P0mSKuvfiZ+Quz3OacsnJ0lShZXWD3AH7vtLkgSkfoAXiZ+cOz1mA+Pb9JlJklQLx1H/foD3tu3TkiSpRv6D+Em6U+MbbfycJEmqleHAROIn63aPe4ERbfycJEmqnR2Bl4iftNs15gC7tvUTkiSppt5H/MTdrnFKmz8bSZJq7VvET96DHd9s+6ciSVLNDQfuJH4Sb3XcC6zX9k9FkqQC7AS8TPxk3ux4Bff9JUkalBOJn9CbHad25JOQJKkw3yF+Um90fLtDn4EkScUZAdxF/OQ+0LgP9/0lSWqr3PsBXgF269hPL0lSwU4ifqLva3yggz+3JEnF+y7xk/3q49yO/sSSJIkRwN3ET/orxv3AyI7+xJIkCYCdSWfsR0/+c4HdO/yzSpKklZxMfAFwesd/SkmStIbvEzf5n9eFn0+SJK3FCOAeuj/5P4D7/pIkhdqF7vYDzAX26MpPJkmS+vVBulcAnNGdH0mSJDXifDo/+f+kWz+MJElqzCjgQTo3+T8CbNC1n0aSJDXsdcA82j/5vwrs2cWfQ5IkNekjtL8A+HBXfwJJktSSH9K+yf+iLmeXJEktGgVMYvCT/6O47y/V0v8BMGqvJeiI6r4AAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                </span>

                <div className="contact_us_txt">
                  <h6>Our Address</h6>
                  <p>3517 W. Gray St. Utica,</p>
                  <Link to="#"> Pennsylvania 57867 </Link>
                </div>
              </div>
            </div>

            {/* Live Support Item */}
            <div className="col-lg-4 col-md-6 mt-20px">
              <div className="contact_us_item">
                <span>
                  <svg
                    width="82"
                    height="66"
                    viewBox="0 0 82 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M59.6871 14.9214H5C2.23858 14.9214 0 17.16 0 19.9214V65.9998L14.9218 58.5389H59.6871V14.9214Z"
                      fill="url(#paint0_linear_2502_3087)"
                    />
                    <path
                      d="M25.6602 0H81.4951V53.3741L64.8516 43.9224H20.6602V5C20.6602 2.23858 22.8987 0 25.6602 0Z"
                      fill="url(#paint1_linear_2502_3087)"
                    />
                    <rect
                      opacity="0.7"
                      x="5.73828"
                      y="0.573242"
                      width="8.50744"
                      height="8.03481"
                      fill="url(#paint2_linear_2502_3087)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2502_3087"
                        x1="1.69325"
                        y1="58.1416"
                        x2="66.0292"
                        y2="49.4896"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6427FF" />
                        <stop offset="1" stopColor="#7D51ED" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2502_3087"
                        x1="19.3775"
                        y1="4.1862"
                        x2="86.441"
                        y2="10.0741"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9FE871" />
                        <stop offset="1" stopColor="#6BD723" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_2502_3087"
                        x1="14.246"
                        y1="0.824206"
                        x2="5.32531"
                        y2="8.09165"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#858DD7" />
                        <stop offset="1" stopColor="#8A2EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                <div className="contact_us_txt">
                  <h6>Live Support</h6>
                  <p>Live Chat Service</p>
                  <a
                    href="https://www.sara.com/livechat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    www.sara.com/livechat{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-60px">
            <div className="col-lg-12">
              <div className="contact_box">
                <div className="map_thumb">
                  <img src={mapImage} alt="Map thumbnail" />
                </div>
                <div className="contact_sms_box">
                  <h3>Send Us Message</h3>

                  <p>
                    Collaboratively engineer prospective imperatives with
                    transparent technology.
                  </p>

                  <form className="contact_form">
                    <div className="contact_form_item">
                      <label htmlFor="contactFormName" className="sr-only">
                        Enter Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactFormName"
                        name="contactFormName"
                        placeholder="Enter Name"
                        autoComplete="name"
                      />
                    </div>
                    <div className="contact_form_item">
                      <label htmlFor="contactFormEmail" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="contactFormEmail"
                        name="contactFormEmail"
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </div>
                    <div className="contact_form_item">
                      <label htmlFor="contactFormMessage" className="sr-only">
                        Write Message
                      </label>
                      <textarea
                        className="form-control"
                        id="contactFormMessage"
                        name="contactFormMessage"
                        rows="5"
                        placeholder="Write Message"
                      ></textarea>
                    </div>

                    <button type="submit" className="sara-btn">
                      Contact Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
