<template>
  <div class="home">
    <div class="global">
      <div class="global-login">
        <el-link :underline="false" @click="link">登陆/注册</el-link>
      </div>
      <div class="global-download">
        <el-link :underline="false">下载豆瓣客户端</el-link>
      </div>
      <div class="global-item">
        <ul>
          <li>
            <el-link :underline="false"><span class="global-item">豆瓣</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">读书</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">电影</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">音乐</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">同城</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">小组</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">阅读</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">FM</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">时间</span></el-link>
          </li>
          <li>
            <el-link :underline="false"><span class="global-item">豆品</span></el-link>
          </li>
        </ul>
      </div>

    </div>
    <div class="header">
      <el-container class="home-container">
        <el-main>
          <div class="nav-header">
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px;'">
              <div style="display: flex;align-items: center"><img src="../assets/img/logo.png" alt=""></div>
            </el-link>
            <el-input placeholder="搜索电影、电视剧、综艺、影人" class="input-with-select" :style="'width: 300px;margin-left:30px'">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <div>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">影讯&购票</el-link>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">选电影</el-link>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">电视剧</el-link>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">排行榜</el-link>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">分类</el-link>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">影评</el-link>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">2019年度榜单</el-link>
            <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">2019书影音报告</el-link>
          </div>
          <el-link :underline="false" :style="'margin-left:20px;margin-right:5px;position:absolute;top:50%;right:15%;transform: translate(-50%, -50%);'">
            <div style="display: flex;align-items: center"><img src="../assets/img/annual_2019.png" style="width:186px;height:96px" alt=""></div>
          </el-link>
        </el-main>
      </el-container>
    </div>
    <div class="content">
      <el-container :style="'width:1240px;margin:0 auto;'">
        <el-main>
          <el-row>
            <el-col :span="18">
              <el-card style="height: 330px;margin: 10px" >
                <div slot="header" class="clearfix">
                  <span>正在热映</span>
                  <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">全部正在热映»</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">即将上映»</el-link>
                </div>
                <el-carousel height="230px" :interval="interval" arrow="hover" indicator-position="none">
                  <el-carousel-item v-for="item in 4" :key="item" :style="{ display:'flex' }">

                    <div style="height: 230px;width: 128px;text-align: center;flex: 1">
                      <div>
                        <el-popover
                            placement="right-start"
                            width="200"
                            trigger="hover">
                          <div>
                            <p>盗梦空间</p>
                            <el-rate v-model="rating" score-template="{value}" disabled show-score
                                     text-color="#ff9900">
                            </el-rate>
                            <div>150分钟 美国</div>
                            <div>导演： 克里斯托弗·诺兰</div>
                            <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                          </div>
                          <a href=""  slot="reference" style="vertical-align:top">
                            <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                          </a>
                        </el-popover></div>
                      <span style="overflow:hidden">盗梦空间</span>
                      <el-rate v-model="rating" score-template="{value}" disabled show-score
                               text-color="#ff9900"  :class="'rate'">
                      </el-rate>
                      <el-button type="primary" size="mini">选购坐票</el-button>
                    </div>

                    <div style="height: 200px;width: 128px;text-align: center;flex: 1">
                      <div>
                        <el-popover
                            placement="right-start"
                            width="200"
                            trigger="hover">
                          <div>
                            <p>盗梦空间</p>
                            <el-rate v-model="rating" score-template="{value}" disabled show-score
                                     text-color="#ff9900">
                            </el-rate>
                            <div>150分钟 美国</div>
                            <div>导演： 克里斯托弗·诺兰</div>
                            <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                          </div>
                          <a href=""  slot="reference" style="vertical-align:top">
                            <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                          </a>
                        </el-popover></div>
                      <span style="overflow:hidden">盗梦空间</span>
                      <el-rate v-model="rating" score-template="{value}" disabled show-score
                               text-color="#ff9900" :class="'rate'">
                      </el-rate>
                      <el-button type="primary" size="mini">选购坐票</el-button>
                    </div>

                    <div style="height: 200px;width: 128px;text-align: center;flex: 1">
                      <div>
                        <el-popover
                            placement="right-start"
                            width="200"
                            trigger="hover">
                          <div>
                            <p>盗梦空间</p>
                            <el-rate v-model="rating" score-template="{value}" disabled show-score
                                     text-color="#ff9900">
                            </el-rate>
                            <div>150分钟 美国</div>
                            <div>导演： 克里斯托弗·诺兰</div>
                            <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                          </div>
                          <a href=""  slot="reference" style="vertical-align:top">
                            <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                          </a>
                        </el-popover></div>
                      <span style="overflow:hidden">盗梦空间</span>
                      <el-rate v-model="rating" score-template="{value}" disabled show-score
                               text-color="#ff9900" :class="'rate'">
                      </el-rate>
                      <el-button type="primary" size="mini">选购坐票</el-button>
                    </div>

                    <div style="height: 200px;width: 128px;text-align: center;flex: 1">
                      <div>
                        <el-popover
                            placement="right-start"
                            width="200"
                            trigger="hover">
                          <div>
                            <p>盗梦空间</p>
                            <el-rate v-model="rating" score-template="{value}" disabled show-score
                                     text-color="#ff9900">
                            </el-rate>
                            <div>150分钟 美国</div>
                            <div>导演： 克里斯托弗·诺兰</div>
                            <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                          </div>
                          <a href=""  slot="reference" style="vertical-align:top">
                            <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                          </a>
                        </el-popover></div>
                      <span style="overflow:hidden">盗梦空间</span>
                      <el-rate v-model="rating" score-template="{value}" disabled show-score
                               text-color="#ff9900" :class="'rate'">
                      </el-rate>
                      <el-button type="primary" size="mini">选购坐票</el-button>
                    </div>

                    <div style="height: 200px;width: 128px;text-align: center;flex: 1">
                      <div>
                        <el-popover
                            placement="right-start"
                            width="200"
                            trigger="hover">
                          <div>
                            <p>盗梦空间</p>
                            <el-rate v-model="rating" score-template="{value}" disabled show-score
                                     text-color="#ff9900">
                            </el-rate>
                            <div>150分钟 美国</div>
                            <div>导演： 克里斯托弗·诺兰</div>
                            <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                          </div>
                          <a href=""  slot="reference" style="vertical-align:top">
                            <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                          </a>
                        </el-popover></div>
                      <span style="overflow:hidden">盗梦空间</span>
                      <el-rate v-model="rating" score-template="{value}" disabled show-score
                               text-color="#ff9900" :class="'rate'">
                      </el-rate >
                      <el-button type="primary" size="mini">选购坐票</el-button>
                    </div>

                  </el-carousel-item>
                </el-carousel>


              </el-card>
              <el-card style="height: 500px;margin: 10px">
                <div slot="header" class="clearfix">
                  <span>最近热门电影</span>
                  <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">热门</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">最新</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">豆瓣高分</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">冷门佳片</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">华语</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">欧美</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">韩国</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">日本</el-link>
                  <el-link :underline="false" :style="'position:relative;float:right;margin-right:5px'">更多»</el-link>
                </div>

                <el-carousel height="380px" :autoplay="false" indicator-position="outside">
                  <el-carousel-item v-for="item in 4" :key="item">


                    <el-row :style="{display: 'flex'}">
                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>
                    </el-row>

                    <el-row :style="'display:flex'">
                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>

                      <div style="height: 190px;width: 128px;text-align: center;flex: 1">
                        <div>
                          <el-popover
                              placement="right-start"
                              width="200"
                              trigger="hover">
                            <div>
                              <p>盗梦空间</p>
                              <el-rate v-model="rating" score-template="{value}" disabled show-score
                                       text-color="#ff9900">
                              </el-rate>
                              <div>150分钟 美国</div>
                              <div>导演： 克里斯托弗·诺兰</div>
                              <div>主演： 昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 </div>
                            </div>
                            <a href=""  slot="reference" style="vertical-align:top">
                              <img src="../assets/img/1.webp" style="width: 120px;height: 150px;vertical-align:top" alt=""/>
                            </a>
                          </el-popover></div>
                        <span style="overflow:hidden">盗梦空间</span>
                      </div>
                    </el-row>


                  </el-carousel-item>
                </el-carousel>
              </el-card>
              <el-card style="height: 500px;margin: 10px">
                <div slot="header" class="clearfix">
                  <span>最近热门电视剧</span>
                  <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">热门</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">国产剧</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">综艺</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">美剧</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">日剧</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">韩剧</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">日本动画</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">纪录片</el-link>
                  <el-link :underline="false" :style="'position:relative;float:right;margin-right:5px'">更多»</el-link>

                </div>
              </el-card>
              <el-card style="height: 500px;margin: 10px">
                <div slot="header" class="clearfix">
                  <span>热门推荐</span>
                </div>
              </el-card>
              <el-card style="height: 500px;margin: 10px">
                <div slot="header" class="clearfix">
                  <span>最受欢迎影评</span>
                  <el-link :underline="false" :style="'margin-left:20px;margin-right:5px'">更多热门影评»</el-link>
                  <el-link :underline="false" :style="'margin-left:5px;margin-right:5px'">新片影评»</el-link>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card style="height: 520px;margin: 10px">
                <div slot="header" class="clearfix">
                  <span>一周口碑榜</span>
                  <el-link :underline="false" :style="'margin-left:10px;margin-right:5px'">更多榜单»</el-link>
                </div>
                <div style="display: flex;vertical-align: center;border-bottom: 1px solid #eaeaea;padding: 10px 0;overflow: hidden" v-for="(item,index) in topics" :key="index"><span>{{index+1}}</span><el-link :underline="false" :style="'margin-left:10px;margin-right:5px;over-flow:hidden'">{{item.topic_name}}</el-link></div>
              </el-card>
              <el-card style="height: 200px;margin: 10px">
                <div slot="header" class="clearfix">
                  <span>热门豆列</span>
                </div>
                <div style="display: flex;position:relative;vertical-align: center;border-bottom: 1px solid #eaeaea;padding: 10px 0;" v-for="(item,index) in doulie" :key="index"><el-link :underline="false" :style="'margin-left:10px;margin-right:5px;over-flow:hidden;font-size:13px;'">{{item.d_name}}</el-link><span style="font-size: 13px;color: #999;position: absolute;right: 0;">{{item.num}}推荐</span></div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      value: 9.3,
      max: 10,
      interval:5000,
      topics: [{topic_name:'芝加哥七君子审判',path:''},
        {topic_name:'云上情歌',path:''},
        {topic_name:'金都',path:''},
        {topic_name:'托米莉斯女王',path:''},
        {topic_name:'梦想',path:''},
        {topic_name:'波拉特2',path:''},
        {topic_name:'十八个礼物',path:''},
        {topic_name:'金鱼',path:''},
        {topic_name:'回声',path:''},
        {topic_name:'喀布尔的燕子',path:''}],
      doulie:[{d_name:'Bonjour la France 电影篇',num:2365,path:''},
        {d_name:'豆瓣电影【口碑榜】2020-07-10 更新',num:1964,path:''}]
    }
  },
  computed: {
    rating: function () {
      return this.value / 2;
    }
  },
  methods:{
    link(){
      this.$router.push("/about");
    }
    // link:()=>{
    //   console.log(this);
    // }
  }
}
</script>

<style>
.global {
  height: 28px;
  color: #d5d5d5;
  background-color: #545652;
  font-size: 12px;
  line-height: 28px;
}

.header {
  position: relative;
  width: 100%;
  min-width: 1040px;
  overflow: hidden;
  zoom: 1;
  /*margin-bottom: 40px;*/
  /*margin:0 auto;*/
  background-color: #f0f3f5;
  line-height: 60px;
}

.header-div {
  background-color: cornflowerblue;
  text-align: center;
  display: flex;
}

.aside {
  width: 200px;
}


.global-download {
  position: relative;
  float: right;
  margin-right: 8px;
}

.global-login {
  float: right;
  margin-right: 12px;
}

.global-item li {
  display: inline-block;
  vertical-align: baseline;
}

.global-item li a {
  padding: 0 12px;
  display: inline-block;
}

.nav-header {
  display: flex;
  align-items: center;
}

.global-item {
  color: #d5d5d5;
}

.global-item:hover {
  color: #FFFFFF;
}

.home-container {
  width: 1240px;
  margin: 0 auto;
  position: relative;
}

.rate span i {
  margin-right: 0;
  font-size: 15px;
}
</style>
