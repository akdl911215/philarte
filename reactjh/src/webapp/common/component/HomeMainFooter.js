import Reaact from 'react';

const HomeMainFooter = () => {
    return (
        <>
            <div class="xans-element- xans-layout xans-layout-footer footer_wrap">
                <div id="footer" class="-frame">
                    <div class="footer_menu">
                        <ul>
                            <li class="home">
                                <a href="/_wg/import/page_01.html">회사소개</a>
                            </li>
                            <li>
                                <a href="/member/agreement.html">이용약관</a>
                            </li>
                            <li>
                                <a href="/shopinfo/guide.html">쇼핑몰 이용안내</a>
                            </li>
                            <li>
                                <a href="/member/privacy.html">
                                    <strong>개인정보취급방침</strong>
                                </a>
                            </li>
                            <li>
                                <a href="#">고객센터</a>
                            </li>
                            <a href="/board/index.html">고객센터</a>
                            <li>
                                <a href="mailto:somini2016@naver.com">제휴/도매문의</a>
                            </li>
                            <li>
                                <a href="#none">채용정보</a>
                            </li>
                        </ul>
                    </div>

                    <div class="oper_time _section">
                        <p class="h4_line"></p>
                        <h4>상담시간</h4>

                        <ul class="xans-element- xans-layout xans-layout-footer ">
                            <li>
                                <strong>평일 : </strong>
                                <span class="v_time1">오전 10:00 ~ 오후 05:00</span>
                            </li>
                            <li>
                                <strong>점심 : </strong>
                                <span class="v_time2">오후 01:00 ~ 오후 02:00</span>
                            </li>
                            <li>
                                <strong>휴무 : </strong>
                                <span class="v_time3">토 / 일 / 공휴일은 휴무</span>
                            </li>
                            <li>
                                <span class="v_etc1"></span>
                            </li>
                            <li>
                                <span class="v_etc2"></span>
                            </li>
                        </ul>
                    </div>

                    <div class="bank_info _section">
                        <p class="h4_line"></p>
                        <h4>은행계좌안내</h4>

                        <ul>
                            <li>
                                <strong class="v_bank11">우리은행</strong>
                                <span class="v_bank12">429-074612-02-001</span>
                            </li>
                            <li>
                                <strong class="v_bank21"></strong>
                                <span class="v_bank22"></span>
                            </li>
                            <li>
                                <strong class="v_bank31"></strong>
                                <span class="v_bank32"></span>
                            </li>
                            <li>
                                <strong class="v_bank41"></strong>
                                <span class="v_bank42"></span>
                            </li>
                            <li>
                                <strong class="v_bank51"></strong>
                                <span class="v_bank52"></span>
                            </li>
                            <li>
                                <strong>예금주</strong>
                                <span class="v_bankName">이정현</span>
                            </li>
                        </ul>
                        <select class="bank_list" onchange="window.open(this.value);" name="select">
                            <option value=""> 인터넷뱅킹 바로가기 </option>
                            <option value="http://www.kbstar.com"> 국민은행 </option>
                            <option value="http://www.scfirstbank.com"> 제일은행 </option>
                            <option value="http://www.wooribank.com"> 우리은행 </option>
                            <option value="http://www.kiupbank.co.kr"> 기업은행 </option>
                            <option value="http://www.kjbank.com"> 광주은행 </option>
                            <option value="http://www.daegubank.co.kr"> 대구은행 </option>
                            <option value="http://www.hanabank.com"> 하나은행 </option>
                            <option value="http://www.shinhan.com"> 신한은행 </option>
                            <option value="http://www.keb.co.kr"> 외환은행 </option>
                            <option value="http://www.jbbank.co.kr"> 전북은행 </option>
                            <option value="http://www.pusanbank.co.kr"> 부산은행 </option>
                            <option value="http://www.chb.co.kr"> 조흥은행 </option>
                            <option value="http://www.goodbank.com"> 한미은행 </option>
                            <option value="http://www.chejubank.co.kr"> 제주은행 </option>
                            <option value="http://www.kyongnambank.co.kr"> 경남은행</option>
                            <option value="http://www.epostbank.go.kr"> 우체국 </option>
                            <option value="http://banking.nonghyup.com"> 농협 </option>
                        </select>
                    </div>

                    <div class="footer_delivery _section">
                        <h4>배송조회</h4>
                        <ul class="first">
                            <li>
                                <i class="xi-truck"></i> <span class="v_tracking1">CJ대한통운 (TEL:1588-1255)</span>{' '}
                                <span>
                                    <a href="http://www.cjkoreaexpress.co.kr/" class="a_tracking2 -btn -line -xs -white" target="_blank">
                                        <i class="xi-search"></i> 배송위치 조회하기
                                    </a>
                                </span>
                            </li>
                            <li class="v_tracking3 info">배송정보는 해당 택배사를 통해 조회가 가능하십니다.</li>
                        </ul>
                        <h4>반품 &amp; 교환</h4>
                        <ul>
                            <li>
                                <i class="xi-map-marker"></i> <strong>반품배송지</strong> <span class="v_returnAdd1">단순변심으로 인한 교환&amp;반품 불가</span>
                            </li>
                            <li class="v_returnAdd2 info">교환&amp;반품 요청은 게시판을 통해서 문의해주세요.</li>
                        </ul>
                    </div>

                    <div class="footer_menu2">
                        <h4>쇼핑메뉴</h4>
                        <p class="h4_line"></p>
                        <ul>
                            <li>
                                <a href="/board/free/list.html?board_no=3">자주 묻는 질문</a>
                            </li>
                            <li>
                                <a href="#none">고객 만족센터</a>
                            </li>
                            <li>
                                <a href="#none">회원 등급 안내</a>
                            </li>
                            <li>
                                <a href="#none">브랜드 스토리</a>
                            </li>
                        </ul>
                    </div>

                    <div class="divClear"></div>
                    <div class="_line"></div>

                    <div class="footer_company">
                        <h4>회사정보</h4>
                        <p class="h4_line"></p>
                        <ul>
                            <li>
                                <strong>회사명</strong>
                                <span>베타존</span>
                                <strong>대표</strong>
                                <span>이정현, 이아름</span>
                                <strong>대표전화</strong>
                                <span>010-5093-9902</span>
                                <strong>팩스</strong>
                                <span>0000</span>
                            </li>
                            <li>
                                <strong>주소</strong>
                                <span>02091 서울시 중랑구 상봉중앙로 1길 26, 4층</span>
                            </li>
                            <li>
                                <strong>사업자 등록번호</strong>
                                <span>111-63-00265</span>
                                <strong>통신판매업 신고</strong>
                                <span>
                                    통신판매업번호 적기 &nbsp;
                                    <a href="#none" onclick="window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=5964400261', 'bizCommPop', 'width=750, height=950;');return false;">
                                        [사업자정보확인]
                                    </a>
                                </span>
                            </li>
                            <li>
                                <strong>개인정보관리책임자</strong>
                                <span class="">
                                    베타존 (<a href="betazon1215@gmail.com">betazon1215@gmail.com</a>)
                                </span>
                                <strong>이메일</strong>
                                <span class="">
                                    <a href="betazon1215@gmail.com">
                                        <i class="xi-mail-o"></i> sbetazon1215@gmail.com
                                    </a>
                                </span>{' '}
                            </li>
                        </ul>
                    </div>

                    <div class="footer_escrow">
                        <ul>
                            <li>
                                <span class="v_escrow1">KG 에스크로 이니페이</span> 를 통해 고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰 에서 가입한 구매안전 서비스를 이용하실 수 있습니다.
                            </li>
                            <li>
                                <a href="#none" class="p_escrow2 -btn -xs -white" data-popup="link,window,700,600">
                                    <i class="xi-check-min"></i> 서비스 가입사실 확인
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="divClear"></div>
                </div>
                <div class="footer_end">
                    <div class="footer_end_inner -frame">
                        <p class="copyright">
                            COPYRIGHT © 2019 <strong>베타존</strong>. ALL RIGHTS RESERVED.
                        </p>
                        <p class="made">
                            <a href="http://webgood.co.kr/" target="_blank">
                                Design by <strong>WG</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomeMainFooter;
