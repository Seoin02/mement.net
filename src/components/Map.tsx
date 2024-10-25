import '@/styles/brands.css';

export default function Map() {
    return (
        <div className="maps">
        <div className="flex flex-col mx-auto w-[1240px] px-10">
            <div>
                
            </div>
            <div className="flex flex-col gap-8 justify-between mapArea kr">
            <div className="localName text-left">South Korea</div>
                <div className="map kr">
                        <img src="/image/Maps/map_kr.png" />
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
                    <div className="point no-anim" style={{top:110, left:137}}>
                        <div style={{top:-25, left:5, width:484, height:1, borderColor:"#777", transform:"rotate(-7deg)"}} className="top"></div>
                    </div>
                    
                        <div className="point no-anim"  style={{top:140, left:190}}>
                            <div style={{top:113, left:-22, width:534, height:1, borderColor:"#777", transform:"rotate(24deg)"}} className="top"></div>
                    </div>
                </div>
            </div>
            <div className='mapArea kr'>
                <div className="flex flex-col gap-8 relative justify-evenly">
                <div className="map seoul flex justify-evenly items-center">
                    <img src="/image/Maps/map_kr_seoul.png"/>
                </div>
                <div className="map gg flex justify-center items-center">
                    <img src="/image/Maps/map_kr_gg.png"/>
                </div>
                </div>	
            </div>
            <div className="flex mt-40 px-auto justify-between">
            <div className="mapArea hk">
                <div className="text-left localName">Hong Kong</div>
                <div className="map hk">
                    <img src="/image/Maps/map_hg.png"/>		
                </div>
            </div>
            
            <div className="mapArea vn">
                <div className="localName">Vietnam</div>
                <div className="map vn">
                    <img src="/image/Maps/map_vn.png"/>    
                </div>
            </div>
            </div>
        </div>
    </div>  
  );
}


interface PointProps {
    top: string;
    left: string;
    lineStyles: React.CSSProperties;
    spanClass: string;
    animationDelay: string;
    label: string;
  }
  
function Point({ top, left, lineStyles, spanClass, animationDelay, label }: PointProps) {
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