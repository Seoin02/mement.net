import '@/styles/brands.css';

export default function Maps() {
  return (
    <div className="wrap">
    <div className="maps">
      <div className="box">
        {/* 한국 지도 */}
        <div className="mapArea kr">
          <div className="localName">South Korea</div>
          <div className="map kr" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
            <img src="/image/Maps/map_kr.png" alt="South Korea Map" />

            {/* 포인트 1 */}
            <div className="point no-anim" style={{ top: '110px', left: '137px', opacity: 1, transform: 'translate(0px, 0px)' }}>
              <div
                style={{
                  top: '-25px',
                  left: '5px',
                  width: '484px',
                  height: '1px',
                  borderColor: '#777',
                  transform: 'rotate(-7deg)',
                }}
                className="top"
              ></div>
              <span className="active"></span>
            </div>

            {/* 포인트 2 */}
            <div className="point no-anim" style={{ top: '140px', left: '190px', opacity: 1, transform: 'translate(0px, 0px)' }}>
              <div
                style={{
                  top: '113px',
                  left: '-22px',
                  width: '534px',
                  height: '1px',
                  borderColor: '#777',
                  transform: 'rotate(24deg)',
                }}
                className="top"
              ></div>
              <span className="active"></span>
            </div>

            {/* 포인트 3 */}
            <Point
              top="111.4921875px"
              left="97.5px"
              lineStyles={{
                top: '-9px',
                left: '-60px',
                width: '66px',
                height: '16px',
              }}
              spanClass="blue active"
              animationDelay="0.1s"
              label="MUSE Incheon Guwol"
            />

            {/* 포인트 4 */}
            <Point
              top="386.484375px"
              left="107.484375px"
              lineStyles={{
                top: '4.99219px',
                left: '-76px',
                width: '82px',
                height: '132px',
              }}
              spanClass="blue active"
              animationDelay="0.3s"
              label="MUSE Gwangju"
            />

            {/* 추가 포인트들... */}
            {/* 포인트 5 */}
            <Point
              top="384.4921875px"
              left="119.484375px"
              lineStyles={{
                top: '4.99219px',
                left: '-89px',
                width: '95px',
                height: '157px',
              }}
              spanClass="red active"
              animationDelay="0.4s"
              label="Shine Beam Gwangju"
            />

            {/* 포인트 6 */}
            <Point
              top="225.4921875px"
              left="159.4921875px"
              lineStyles={{
                top: '4.99219px',
                left: '-129px',
                width: '135px',
                height: '356px',
              }}
              spanClass="red active"
              animationDelay="0.2s"
              label="Shine Beam Cheonan"
            />

            {/* 포인트 7 */}
            <Point
              top="275.484375px"
              left="183.4921875px"
              lineStyles={{
                top: '4.99219px',
                left: '-153px',
                width: '159px',
                height: '333px',
              }}
              spanClass="blue active"
              animationDelay="0.3s"
              label="MUSE Daejeon"
            />

            {/* 포인트 8 */}
            <Point
              top="282.4921875px"
              left="199.4765625px"
              lineStyles={{
                top: '4.99219px',
                left: '-169px',
                width: '175px',
                height: '354px',
              }}
              spanClass="red active"
              animationDelay="0.4s"
              label="Shine Beam Daejeon"
            />

            {/* 포인트 9 */}
            <Point
              top="237.4921875px"
              left="206.484375px"
              lineStyles={{
                top: '4.99219px',
                left: '-175px',
                width: '181px',
                height: '423px',
              }}
              spanClass="red active"
              animationDelay="0.5s"
              label="Shine Beam Cheongju"
            />

            {/* 포인트 10 */}
            <Point
              top="342.4921875px"
              left="404.484375px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '62px',
                height: '101px',
              }}
              spanClass="blue active"
              animationDelay="0.2s"
              label="MUSE Ulsan"
            />

            {/* 포인트 11 */}
            <Point
              top="374.484375px"
              left="391.4765625px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '59px',
                height: '97px',
              }}
              spanClass="blue active"
              animationDelay="0.3s"
              label="MUSE Centum"
            />

            {/* 포인트 12 */}
            <Point
              top="380.484375px"
              left="376.4765625px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '49px',
                height: '119px',
              }}
              spanClass="red active"
              animationDelay="0.4s"
              label="Shine Beam Busan"
            />

            {/* 포인트 13 */}
            <Point
              top="384.4921875px"
              left="364.4765625px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '95px',
                height: '142px',
              }}
              spanClass="blue active"
              animationDelay="0.5s"
              label="MUSE Busan"
            />

            {/* 포인트 14 */}
            <Point
              top="383.484375px"
              left="336.4921875px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '96px',
                height: '195px',
              }}
              spanClass="blue active"
              animationDelay="0.6s"
              label="MUSE Changwon"
            />

            {/* 포인트 15 */}
            <Point
              top="306.4921875px"
              left="325.4765625px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '108px',
                height: '318px',
              }}
              spanClass="blue active"
              animationDelay="0.7s"
              label="MUSE Daegu"
            />

            {/* 포인트 16 */}
            <Point
              top="308.484375px"
              left="315.4921875px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '46px',
                height: '339px',
              }}
              spanClass="red active"
              animationDelay="0.7s"
              label="Shine Beam Daegu(Beomeo)"
            />

            {/* 포인트 17 */}
            <Point
              top="237.984375px"
              left="218.484375px"
              lineStyles={{
                top: '4.99219px',
                left: '-247px',
                width: '253px',
                height: '446px',
              }}
              spanClass="blue active"
              animationDelay="0.7s"
              label="Muse Cheongju"
            />

            {/* 포인트 18 */}
            <Point
              top="384.984375px"
              left="346.4765625px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '52px',
                height: '170px',
              }}
              spanClass="red active"
              animationDelay="0.5s"
              label="Shine Beam Changwon"
            />

            {/* 포인트 19 */}
            <Point
              top="337.9921875px"
              left="409.9921875px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '54px',
                height: '80px',
              }}
              spanClass="red active"
              animationDelay="0.6s"
              label="Shine Beam Ulsan"
            />

            {/* 포인트 20 */}
            <Point
              top="84.9375px"
              left="102.984375px"
              lineStyles={{
                top: '2px',
                left: '5px',
                width: '125px',
                height: '4px',
              }}
              spanClass="blue active"
              animationDelay="0s"
              label="Muse GeomDan"
            />

            {/* 포인트 21 */}
            <Point
              top="235.9453125px"
              left="173.9765625px"
              lineStyles={{
                top: '4.99219px',
                left: '-182px',
                width: '188px',
                height: '327px',
              }}
              spanClass="blue active"
              animationDelay="0s"
              label="Muse Cheonan"
            />

            {/* 포인트 22 */}
            <Point
              top="392.953125px"
              left="361.9921875px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '71px',
                height: '207px',
              }}
              spanClass="blue active"
              animationDelay="0s"
              label="MUSE Gimhae"
            />

            {/* 포인트 23 */}
            <Point
              top="116.953125px"
              left="79.9921875px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '148px',
                height: '17px',
              }}
              spanClass="red active"
              animationDelay="0s"
              label="Shine Beam Songdo"
            />

            {/* 포인트 24 */}
            <Point
              top="332.953125px"
              left="403.9921875px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '63px',
                height: '60px',
              }}
              spanClass="red active"
              animationDelay="0s"
              label="Shine Beam Pohang"
            />
          </div>

          <br />

          <div className="map seoul" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
            <img src="/image/Maps/map_kr_seoul.png" alt="Seoul Map" />

            {/* 서울 포인트 1 */}
            <Point
              top="108.984375px"
              left="281.9765625px"
              lineStyles={{
                top: '5px',
                left: '5px',
                width: '63px',
                height: '2px',
              }}
              spanClass="red active"
              animationDelay="0.1s"
              label="Shine Beam Nowon"
            />

            {/* 서울 포인트 2 */}
            <Point
              top="192.984375px"
              left="150px"
              lineStyles={{
                top: '4.99219px',
                left: '-83px',
                width: '89px',
                height: '131px',
              }}
              spanClass="red active"
              animationDelay="0.1s"
              label="Shine Beam Hongdae"
            />

            {/* 서울 포인트 3 */}
            <Point
              top="196.9921875px"
              left="161.9765625px"
              lineStyles={{
                top: '4.99219px',
                left: '-94px',
                width: '100px',
                height: '157px',
              }}
              spanClass="blue active"
              animationDelay="0.2s"
              label="MUSE Sinchon"
            />

            {/* 서울 포인트 4 */}
            <Point
              top="207.984375px"
              left="236.9765625px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '94px',
                height: '177px',
              }}
              spanClass="blue active"
              animationDelay="0.2s"
              label="MUSE Gangnam"
            />

            {/* 서울 포인트 5 */}
            <Point
              top="217.9921875px"
              left="245.9765625px"
              lineStyles={{
                top: '4.99219px',
                left: '5px',
                width: '84px',
                height: '138px',
              }}
              spanClass="red active"
              animationDelay="0.3s"
              label="Shine Beam Gangnam"
            />

            {/* 서울 포인트 6 */}
            <Point
              top="174.984375px"
              left="79.4765625px"
              lineStyles={{
                top: '-72px',
                left: '-34px',
                width: '40px',
                height: '80px',
              }}
              spanClass="red active"
              animationDelay="0.7s"
              label="Shine Beam Gangseo"
            />

            {/* 서울 포인트 7 */}
            <Point
              top="206.8359375px"
              left="208.9921875px"
              lineStyles={{
                top: '-70px',
                left: '5px',
                width: '139px',
                height: '76px',
              }}
              spanClass="blue active"
              animationDelay="0.6s"
              label="MUSE Myeongdong"
            />

            {/* 서울 포인트 8 */}
            <Point
              top="188.203125px"
              left="340.9921875px"
              lineStyles={{
                top: '5px',
                left: '5px',
                width: '55px',
                height: '2px',
              }}
              spanClass="blue active"
              animationDelay="0s"
              label="Muse&nbsp;cheonHo"
            />

            {/* 서울 포인트 9 */}
            <Point
              top="92.2265625px"
              left="283.0078125px"
              lineStyles={{
                top: '4px',
                left: '5px',
                width: '61px',
                height: '3px',
              }}
              spanClass="blue active"
              animationDelay="0s"
              label="MUSE Nowon"
            />
          </div>

          {/* 홍콩 지도 */}
          <div className="mapArea hk">
            <div className="localName">Hong Kong</div>
            <div className="map hk" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
              <img src="/image/Maps/map_hg.png" alt="Hong Kong Map" />

              {/* 홍콩 포인트 1 */}
              <Point
                top="285.4921875px"
                left="440.9765625px"
                lineStyles={{
                  top: '4.99219px',
                  left: '-36px',
                  width: '42px',
                  height: '203px',
                }}
                spanClass="green active"
                animationDelay="0.1s"
                label="Skin Beam Mong Kok"
              />

              {/* 홍콩 포인트 2 */}
              <Point
                top="327.4921875px"
                left="460.9921875px"
                lineStyles={{
                  top: '4.99219px',
                  left: '-29px',
                  width: '35px',
                  height: '200px',
                }}
                spanClass="green active"
                animationDelay="0.2s"
                label="Skin Beam Causeway Bay"
              />

              {/* 홍콩 포인트 3 */}
              <Point
                top="297.984375px"
                left="450.984375px"
                lineStyles={{
                  top: '4.99219px',
                  left: '-37px',
                  width: '43px',
                  height: '211px',
                }}
                spanClass="green active"
                animationDelay="0.6s"
                label="Skin Beam Tsim Sha Tsui"
              />
            </div>
          </div>

          {/* 베트남 지도 */}
          <div className="mapArea vn">
            <div className="localName">Vietnam</div>
            <div className="map vn" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
              <img src="/image/Maps/map_vn.png" alt="Vietnam Map" />

              {/* 베트남 포인트 1 */}
              <Point
                top="376.9921875px"
                left="174.2109375px"
                lineStyles={{
                  top: '4.99219px',
                  left: '5px',
                  width: '2px',
                  height: '88px',
                }}
                spanClass="red active"
                animationDelay="0s"
                label="Shine Beam Ho Chi Minh"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

interface PointProps {
  top: string;
  left: string;
  lineStyles: React.CSSProperties;
  spanClass: string;
  animationDelay: string;
  label: string;
}

const Point: React.FC<PointProps> = ({ top, left, lineStyles, spanClass, animationDelay, label }) => {
  return (
    <div className="point" style={{ top, left }}>
      <div style={lineStyles} className={lineStyles.left ? 'left bottom' : 'right bottom'}></div>
      <span style={{ animationDelay }} className={spanClass}></span>
      <p style={{ top: 'auto', opacity: 1 }}>
        {label}
      </p>
    </div>
  );
};