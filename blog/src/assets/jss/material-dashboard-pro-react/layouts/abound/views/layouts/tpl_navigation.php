<?php 
$quanLy = false;
$traCuu = false;
if(!Yii::app()->user->isGuest) {
  $roles = Rights::getAssignedRoles();

  foreach($roles as $k=>$role) {
    if($k == 'quanLy') {
      $quanLy = true;
    }
    if($k == 'traCuu') {
      $traCuu = true;
    }
  }
}

?>
<div class="navbar navbar-fixed-top" >
	<div class="navbar-inner">
    <div class="container">
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse" >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>

          <!-- Be sure to leave the brand out there if you want it shown -->
          <div><div>
          <a class="brand" href="#">
            <div style="vertical-align:middle">
             <img src="<?php echo Yii::app()->baseUrl?>/css/logo-stnmt.gif" style="height:60px;float:left;margin-top:0px;">
             <div style="line-height:28px;width:550px;text-align:center;margin-top:10px;">SỞ TÀI NGUYÊN VÀ MÔI TRƯỜNG TRÀ VINH <br> Cơ sở dữ liệu tài nguyên và môi trường tỉnh Trà Vinh</div></a>
            </div>
          <div class="nav-collapse" style="padding-top:40px;">
			<?php $this->widget('zii.widgets.CMenu',array(
                    'htmlOptions'=>array('class'=>'pull-right nav'),
                    'submenuHtmlOptions'=>array('class'=>'dropdown-menu'),
					           'itemCssClass'=>'item-test',
                    'encodeLabel'=>false,
                    'items'=>array(
                      
                      array(
                        'label'=>'Dữ liệu  tài nguyên môi trường</br>biển và hải đảo <span class="caret"></span>', 
                        'url'=>"#",                       
                          'itemOptions'=>array(
                          'class'=>'dropdown','tabindex'=>"-1",
                          ),
                          'linkOptions'=>array(
                          'class'=>'dropdown-toggle',
                          'data-toggle'=>"dropdown"
                          ),
                         'visible'=>!Yii::app()->user->isGuest,
                         'items'=>array(
                              array(
                                'label'=>'Kế hoạch ứng phó</br>Sự cố tràn đầu',
                                'url'=>array('/bienHaiDao/suCoTranDau')
                                ),
                              array(
                                'label'=>'Điện gió',
                                'url'=>array('/bienHaiDao/dienGio')
                                )
                            )
                         ),
                      array(
                        'label'=>'Dữ liệu </br> khí tượng thủy văn <span class="caret"></span>', 
                        'url'=>"#",                       
                          'itemOptions'=>array(
                          'class'=>'dropdown','tabindex'=>"-1",
                          ),
                          'linkOptions'=>array(
                          'class'=>'dropdown-toggle',
                          'data-toggle'=>"dropdown"
                          ),
                         'visible'=>!Yii::app()->user->isGuest,
                         'items'=>array(
                              array(
                                'label'=>'Trạm khí tượng thủy văn',
                                'url'=>array('/bienHaiDao/tramKhiTuongThuyVan')
                                ),
                              array(
                                'label'=>'Dữ liệu trạm khí tượng thủy văn',
                                'url'=>array('/bienHaiDao/dlTramKhiTuongThuyVan')
                                )
                            )
                         ),
                       array(
                        'label'=>'Dữ liệu</br>môi trường  <span class="caret"></span>',
                        'url'=>'#',
                        'itemOptions'=>array(
                          'class'=>'dropdown','tabindex'=>"-1",

                          ),
                        'linkOptions'=>array(
                          'class'=>'dropdown-toggle',
                          'data-toggle'=>"dropdown"
                          ),
                          'items'=>array(
                              array(
                                'label'=>'Báo cáo hiện trạng môi trường các cấp',
                                'url'=>array('/quantrac')
                                ),
                              array(
                                'label'=>'Thông tin về đánh giá tác động môi trường(ĐTM),<br>đánh giá môi trường chiến lược (ĐMC),<br>kế hoạch bảo vệ môi trường (CBM),<br>đề án bảo vệ môi trường',
                                'url'=>array('/cskd/coso/')
                              ),

                              array(
                                'label'=>'Kết quả điều tra, khảo sát, thanh tra, kiểm tra môi trường',
                                'url'=>array('/moiTruong/kiemTraMoiTruong/')
                              ),
                              array(
                                'label'=>'Kết quả cấp, gia hạn, thu hồi giấy phép môi trường',
                                'url'=>array('/moiTruong/giayPhepMoiTruong/')
                              ),
                              array(
                                'label'=>'Các cơ sở gây ô nhiễm môi trường',
                                'url'=>array('/moiTruong/coSoONhiem/')
                              ),
                              array(
                                'label'=>'Các kết quả công trình, dự án về môi trường',
                                'url'=>array('/moiTruong/ketQuaCongTrinh/')
                              ),
                              array(
                                'label'=>'Truyền thông môi trường',
                                'url'=>array('/moiTruong/truyenThongMoiTruong/')
                              ),
                              array(
                                'label'=>'Sự cố môi trường',
                                'url'=>array('/moiTruong/suCoMoiTruong/')
                              ),
                              array(
                                'label'=>'Bảo tồn đa dạng sinh học',
                                'url'=>array('/moiTruong/baoTonSinhHoc/')
                              ),


                          ),
                         'visible'=>!Yii::app()->user->isGuest && !$traCuu
                         ),


                    array('label'=>'Dữ liệu</br>đất đai  <span class="caret"></span>', 'url'=>'#','itemOptions'=>array('class'=>'dropdown','tabindex'=>"-1"),'linkOptions'=>array('class'=>'dropdown-toggle','data-toggle'=>"dropdown"),
                          'items'=>array(
                              array(
                                'label'=>'Bản đồ quy hoạch đất đai',
                                'url'=>array('/datDai/quyHoach')
                                ),
                              array(
                                'label'=>'Bản đồ kiểm kê đất đai',
                                'url'=>array('/datDai/kiemKe')
                              ),
														  array(
                                'label'=>'Thông tin dữ liệu về các mạng lưới đo đạc',
                                'url'=>array('/datDai/mangLuoi')
                              ),
															array(
                                'label'=>'Bản đồ kết quả điều tra thoái hóa đất',
                                'url'=>array('/datDai/thoaiHoaDat')
                              ),

                              array(
                                'label'=>'Kết quả giao đất, cho thuê đất, thu hồi đất, chuyển mục đích sử dụng đất,<br>thực hiện các quyền của người sử dụng đất',
                                'url'=>array('/datDai/ketQua')
                              ),


                          ),
                         'visible'=>!Yii::app()->user->isGuest  && !$traCuu
                         ),

                     array('label'=>'Dữ liệu về</br> tài nguyên nước  <span class="caret"></span>', 'url'=>'#','itemOptions'=>array('class'=>'dropdown','tabindex'=>"-1"),'linkOptions'=>array('class'=>'dropdown-toggle','data-toggle'=>"dropdown"),
                          'items'=>array(
                              array(
                                'label'=>'Dữ liệu về xã nước thải vào nguồn nước',
                                'url'=>array('/taiNguyenNuoc/congTrinhXaThai')
                              ),
                              array(
                                'label'=>'Dữ liệu về khai thác, sử dụng tài nguyên nước',
                                'url'=>array('/taiNguyenNuoc/khaiThac')
                              ),
                              // array(
                              //   'label'=>'Kết quả cấp, gia hạn, thu hồi, điều chỉnh giấy phép thăm dò, khai thác sử dụng tài nguyên nước',
                              //   'url'=>array('/taiNguyenNuoc/giayPhep')
                              // ),
                          ),
                         'visible'=>!Yii::app()->user->isGuest  && !$traCuu
                         ),
                     array('label'=>'Dữ liệu về</br> địa chất khoáng sản  <span class="caret"></span>', 'url'=>'#','itemOptions'=>array('class'=>'dropdown','tabindex'=>"-1"),'linkOptions'=>array('class'=>'dropdown-toggle','data-toggle'=>"dropdown"),
                          'items'=>array(
                              array(
                                'label'=>'Bản đồ khai thác khoáng sản',
                                'url'=>array('/khoangSan/khaiThac')
                              ),
                              // array(
                                // 'label'=>'Kết quả cấp, gia hạn, thu hồi,cho phép, trả lại giấy phép hoạt động khoáng sản, cho phép tiếp tục thực hiện quyền hoạt động khoáng sản',
                                // 'url'=>array('/khoangSan/giayPhep')
                              // ),
                          ),
                         'visible'=>!Yii::app()->user->isGuest  && !$traCuu
                         ),
                      array(
                        'label'=>'Tra cứu chung', 
                        'url'=>array('/traCuu'),                       
                          
                         'visible'=>!Yii::app()->user->isGuest
                         ), 
                      array('label'=>'Đăng nhập', 'url'=>array('/user/login'), 'visible'=>Yii::app()->user->isGuest),

                         array('label'=>Yii::app()->user->name.' <span class="caret"></span>', 'url'=>'#','itemOptions'=>array('class'=>'dropdown','tabindex'=>"-1"),'linkOptions'=>array('class'=>'dropdown-toggle','data-toggle'=>"dropdown"),
                            'items'=>array(
                                array('label'=>'Đổi mật khẩu', 'url'=>array('/user/profile/changepassword')),
                                array('label'=>'Phân quyền', 'url'=>array('/rights'), 'visible'=>!Yii::app()->user->isGuest),
                                array(
                                  'label'=>'Danh sách tài khoản',
                                  'url'=>array('/user/admin/')
                                  ) ,
                                // array('label'=>'Danh mục đơn vị hành chánh', 'url'=>array('/dmDonViHanhChanh')),
                                // array('label'=>'Danh mục đơn vị tính', 'url'=>array('/dmDonViTinh')),
                                // array('label'=>'Danh mục loại hình kinh doanh', 'url'=>array('/dmLoaiHinhKinhDoanh')),
                                // array('label'=>'Danh mục loại quan trắc', 'url'=>array('/dmLoaiQuanTrac')),
                                // array('label'=>'Danh mục loại thủ tục môi trường', 'url'=>array('/dmLoaiThuTuc')),
                                array('label'=>'Đăng xuất', 'url'=>array('/site/logout')),
                              // array('label'=>'Danh sách chủ cơ sở', 'url'=>'#'),
                              //  array('label'=>'Thêm chủ cơ sở', 'url'=>'#'),
                              //  array('label'=>'One more separated link', 'url'=>'#'),
                            ),
                        'visible'=>!Yii::app()->user->isGuest
),
                    ),
                )); ?>
    	</div>
    </div>
	</div>
</div>

<div class="subnav navbar navbar-fixed-top">
    <div class="navbar-inner">
    	<div class="container">

       <!--  	<div class="style-switcher pull-left">
                <a href="javascript:chooseStyle('none', 60)" checked="checked"><span class="style" style="background-color:#0088CC;"></span></a>
                <a href="javascript:chooseStyle('style2', 60)"><span class="style" style="background-color:#7c5706;"></span></a>
                <a href="javascript:chooseStyle('style3', 60)"><span class="style" style="background-color:#468847;"></span></a>
                <a href="javascript:chooseStyle('style4', 60)"><span class="style" style="background-color:#4e4e4e;"></span></a>
                <a href="javascript:chooseStyle('style5', 60)"><span class="style" style="background-color:#d85515;"></span></a>
                <a href="javascript:chooseStyle('style6', 60)"><span class="style" style="background-color:#a00a69;"></span></a>
                <a href="javascript:chooseStyle('style7', 60)"><span class="style" style="background-color:#a30c22;"></span></a>
          	</div>
           <form class="navbar-search pull-right" action="">

           <input type="text" class="search-query span2" placeholder="Search">

           </form> -->
    	</div><!-- container -->
    </div><!-- navbar-inner -->
</div><!-- subnav -->
