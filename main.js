function bieuQuyet() {
    var bieuquyet = document.dangKy.bq.value;
    if (bieuquyet == "") {
        alert('Vui lòng chọn mục mà bạn muốn biểu quyết');
    }
    if (bieuquyet == "Mục thông tin thống kê") {
        alert(' bạn đã biểu quyết Mục thông tin thống kê');
    }
    if (bieuquyet == "Niên gián thống kê") {
        alert(' bạn đã biểu quyết Niên gián thống kê');
    }
    if (bieuquyet == "Tin tức - sự kiện ngành thống kê") {
        alert(' bạn đã biểu quyết Tin tức - sự kiện ngành thống kê');
    }
    if (bieuquyet == "Kết quả điều tra") {
        alert(' bạn đã biểu quyết Kết quả điều tra');
    }
    if (bieuquyet == "Khác") {
        alert(' bạn đã biểu quyết Khác');
    }
    location.reload(true);
}
function xemKetQua() {
    var bIeuquyet = document.dangKy.bq.value;
    if (bIeuquyet == "") {
        alert('Vui lòng chọn mục mà bạn muốn xem kết quả');
    }
    if (bIeuquyet == "Mục thông tin thống kê") {
        alert(' Kết quả Mục thông tin thống kê đang cập nhật');
    }
    if (bIeuquyet == "Niên gián thống kê") {
        alert(' Kết quả của mục Niên gián thống kê đang cập nhật');
    }
    if (bIeuquyet == "Tin tức - sự kiện ngành thống kê") {
        alert(' Kết quả của mục Tin tức - sự kiện ngành thống kê đang cập nhật');
    }
    if (bIeuquyet == "Kết quả điều tra") {
        alert(' Kết quả của mục Kết quả điều tra đang cập nhật');
    }
    if (bIeuquyet == "Khác") {
        alert(' Kết quả của mục Khác đang cập nhật');
    }
    location.reload(true);
}