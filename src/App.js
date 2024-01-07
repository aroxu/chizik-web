import logo from "./chizik.png";
import screenshot1 from "./screenshots/screenshot_1.png";
import screenshot2 from "./screenshots/screenshot_2.png";
import "./App.scss";

const preventRightClick = (event) => {
  event.preventDefault();
};

const Cheek = () => {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-left">
          <div className="App-content">
            <img src={logo} className="App-logo" alt="logo" onContextMenu={preventRightClick} />
            <h3>치지직 스트리머를 위한 디스코드 봇, "치직"</h3>

            <a
              href="https://discord.com/oauth2/authorize?client_id=1183664649418326079&scope=bot+applications.commands&permissions=149504"
              role="button"
              className="outline"
            >
              초대하기
            </a>
            <br />
            <a href="https://discord.gg/3cr7mduVh4" role="button" className="contrast outline">
              치직 봇 지원 서버
            </a>
            <br />
            <p>
              <a href="https://toss.me/aroxu" target="_blank" rel="noreferrer">
                <span>개발자 도와주기</span>
              </a>
            </p>
          </div>
        </div>
        <div className="App-right">
          <div className="App-content">
            <img src={screenshot1} className="Screenshot" alt="디스코드 방송 알림" />
            <br />
            <h2>디스코드에 방송 알림을 바로 보내보세요.</h2>
            <p>나의 시청자들에게 쉽게 알림을 전송할 수 있습니다.</p>
          </div>
          <div className="App-content">
            <img src={screenshot2} className="Screenshot" alt="방송 정보 조회" />
            <br />
            <h2>채널 정보 조회하기</h2>
            <p>누적 시청자 수, 현재 시청자 수 등 채널 정보를 쉽게 확인할 수 있습니다.</p>
          </div>
          <div className="App-content">
            <h2>더 많은 기능을 추가할 예정입니다.</h2>
            <p>미리 초대해두고 업데이트 될 기능을 발빠르게 만나보세요!</p>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <div>
          <a href="https://chizik.aroxu.me/policy/tos" target="_blank" rel="noreferrer">
            이용약관
          </a>{" "}
          |{" "}
          <a href="https://chizik.aroxu.me/policy/privacy" target="_blank" rel="noreferrer">
            개인정보 처리방침
          </a>
        </div>
        <code>© {new Date().getFullYear()} aroxu. All rights reserved.</code>
      </footer>
    </div>
  );
};

export default Cheek;
