$(Document).ready(function (){
    $("#view-more-info").hover(function(){
        $("#more-info").show(300);},
        function(){
            $("#more-info").hide(300);
        })
    $("#view-more-info-1").hover(function(){
        $("#more-info-1").show(300);},
        function(){
            $("#more-info-1").hide(300);
        })
    $("#view-more-info-2").hover(function(){
        $("#more-info-2").show(300);},
        function(){
            $("#more-info-2").hide(300);
        })
    $("#view-more-info-3").hover(function(){
        $("#more-info-3").show(300);},
        function(){
            $("#more-info-3").hide(300);
        })
    $("#view-more-info-4").hover(function(){
        $("#more-info-4").show(300);},
        function(){
            $("#more-info-4").hide(300);
    })
    $("#view-more-info-5").hover(function(){
        $("#more-info-5").show(300);},
        function(){
            $("#more-info-5").hide(300);
    })
    $("#view-more-info-7").hover(function(){
        $("#more-info-7").show(300);},
        function(){
            $("#more-info-7").hide(300);
    })
    $("#view-more-info-8").hover(function(){
        $("#more-info-8").show(300);},
        function(){
            $("#more-info-8").hide(300);
    })
    $("#view-more-info-6").hover(function(){
        $("#more-info-6").show(300);},
        function(){
            $("#more-info-6").hide(300);
    })
    $("#view-more-info-9").hover(function(){
        $("#more-info-9").show(300);},
        function(){
            $("#more-info-9").hide(300);
    })
    $("#view-more-info-12").hover(function(){
        $("#more-info-12").show(300);},
        function(){
            $("#more-info-12").hide(300);
    })
    $("#view-more-info-14").hover(function(){
        $("#more-info-14").show(300);},
        function(){
            $("#more-info-14").hide(300);
    })
    $("#view-more-info-10").hover(function(){
        $("#more-info-10").show(300);},
        function(){
            $("#more-info-10").hide(300);
    })
    $("#view-more-info-11").hover(function(){
        $("#more-info-11").show(300);},
        function(){
            $("#more-info-11").hide(300);
    })
    $("#view-more-info-13").hover(function(){
        $("#more-info-13").show(300);},
        function(){
            $("#more-info-13").hide(300);})
            
    var btn = $('#backtotopmenu');
    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
// sửa
    var name = $('#hoten');
    var phone = $('#sdt');
    var address = $('#address')
    checkName = () => {
        var reg = /^([A-Z]+[a-z]*)((\s)([A-Z]+[a-z]*))*$/
        if(name.val().length == 0) {
            $('.erhoten').html('Vui Lòng không bỏ trống trường này')
            return false
        }

        if (reg.test(name.val())) {
            $('.erhoten').html(' ')
            return true
        }
        else {
            $('.erhoten').html('Tên Không đúng định dạng vui lòng nhập lại')
            return false
        }
    }
    checkPhone = () => {
        var reg = /^0[0-9]{9}$/
        if(phone.val().length == 0) {
            $('.ersdt').html('Vui Lòng không bỏ trống trường này')
            return false
        }
        if (reg.test(phone.val())) {
            $('.ersdt').html(' ')
            return true
        }
        else {
            $('.ersdt').html('Số điện thoại không đúng định dạng vui lòng nhập lại')
            return false
        }           
    }
    name.blur( () => {
        checkName()
    })
    phone.blur( () => {
        checkPhone()
    })
    // password
    var npass= $('#newpassword')
    var cpass= $('#conformpassword')
    function verifyPassword() {  
        if(npass.val() == "") {  
            $('.ernewpass').html('Vui lòng không để trống')
           return false;  
        }  
        if(npass.val().length < 8) {  
            $('.ernewpass').html('Mật khẩu phải > 8 ký tự')
           return false;  
        }  
        if(npass.val().length > 15) {  
            $('.ernewpass').html('Mật khẩu phải < 15 ký tự')
           return false;  
        } else {  
            $('.ernewpass').html(' ')
            return true
        }  
      }
    npass.blur( () => {
        verifyPassword()
    })

    function matchPassword() {  
        if(cpass.val() != npass.val())  
        {   
            $('.erconformpass').html('Mật Khẩu không khớp')
            return false
        } else {  
            $('.erconformpass').html(' ')
            return true
        }
        }
    cpass.blur(() => {
        matchPassword()
    })
    checkAddress = () => {
        var reg = /^[A-Z a-z \s]+[0-9]+$/
        if(address.val().length == 0) {
            $('.eraddress').html('Vui Lòng không bỏ trống trường này')
            return false
        }

        if (reg.test(address.val())) {
            $('.eraddress').html(' ')
            return true
        }
        else {
            $('.eraddress').html('Địa chỉ không đúng định dạng vui lòng nhập lại')
            return false
        }
    }
    address.blur( () => checkAddress())
    var mail = $("#email");
        function ktemail(){
            var rex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(rex.test(mail.val())){
                $('.eremail').html("");
                return true;
            }else{
                $('.eremail').html("Yêu cầu nhập lại email");
                return true;
            }
        }
    $('#email').blur(ktemail)
    var cm = $('#cm');
    checkcm = () => {
        var reg = /^[0-9]{9}$/
        if(cm.val().length == 0) {
            $('.ercm').html('Vui Lòng không bỏ trống trường này');
            return false;
        }
        if (reg.test(cm.val())) {
            $('.ercm').html(' ');
            return true;
        }
        else {
            $('.ercm').html('Số Chứng minh không hợp lệ');
            return false;
        }           
    }
    cm.blur( () => {
        checkcm()
    })
    var cname = $('#cardname');
    checkcname = () => {
        var reg = /^([A-Z]+[a-z]*)((\s)([A-Z]+[a-z]*))*$/
        if(cname.val().length == 0) {
            $('.ercardname').html('Vui Lòng không bỏ trống trường này');
            return false;
        }
        if (reg.test(cname.val())) {
            $('.ercardname').html(' ');
            return true;
        }
        else {
            $('.ercardname').html('Tên Không đúng định dạng vui lòng nhập lại');
            return false;
        }
    }
    cname.blur( () => {
        checkcname()
    })
    var cnum = $('#cardnum')
    checkcnum = () => {
        var reg = /^[0-9]{4}(-[0-9]{4}){3}$/
        if(cnum.val().length == 0) {
            $('.ercardnum').html('Vui Lòng không bỏ trống trường này');
            return false;
        }
        if (reg.test(cnum.val())) {
            $('.ercardnum').html(' ');
            return true;
        }
        else {
            $('.ercardnum').html('Mã Thẻ Không hợp lệ');
            return false;
        }           
    }
    cnum.blur( () => {
        checkcnum()
    })
    var nstk = $('#stk')
    checkstk = () => {
        var reg = /^[0-9]{13}$/
        if(nstk.val().length == 0) {
            $('.erstk').html('Vui Lòng không bỏ trống trường này');
            return false;
        }
        if (reg.test(nstk.val())) {
            $('.erstk').html(' ');
            return true;
        }
        else {
            $('.erstk').html('Số Tài khoản không hợp lệ');
            return false;
        }
    }
    nstk.blur( () => {
        checkstk()
    })
})
