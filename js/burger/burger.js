"use strict";var e=document.querySelector(".burger"),t=document.querySelector(".header__wrapper .middle-nav"),a=(document.querySelectorAll(".header__nav--active .middle-nav .nav__item"),document.querySelector(".header__wrapper .top-nav"));document.querySelectorAll(".header__nav--active .top-nav .nav__item");e.addEventListener("click",(function(e){e.preventDefault();var r=document.createElement("div");window.innerWidth<=576?r.innerHTML=t.outerHTML+a.outerHTML:r.innerHTML=t.outerHTML,r.classList.add("header__nav--active"),document.body.classList.add("stop-scroll");var n=document.querySelector(".showClose");if(void 0===n||null==n){var o=document.createElement("span");if(o.style.display="block",o.style.width="24px",o.style.height="24px",window.innerWidth>576?(o.style.left="72px",o.style.top="34px"):(o.style.left="16px",o.style.top="12px"),o.tabIndex=0,o.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><rect x="4.5752" y="2.9541" width="24" height="3" rx="1.5" transform="rotate(45 4.5752 2.9541)" /><rect x="21.5459" y="5.0752" width="24" height="3" rx="1.5" transform="rotate(135 21.5459 5.0752)" /></svg>',o.classList.add("showClose"),o.ariaLabel="Закрыть",r.prepend(o),window.innerWidth>576){var c=document.createElement("div");c.classList.add("nav__list-img"),r.append(c)}document.querySelector(".header__wrapper").append(r),document.querySelectorAll(".header__nav--active .middle-nav .nav__item").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".header__nav--active").classList.add("header__nav--close"),setTimeout((function(){document.querySelector(".header__nav--active").remove("header__nav--active")}),1e3),document.body.classList.remove("stop-scroll")}))})),document.querySelectorAll(".header__nav--active .top-nav .nav__item").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".header__nav--active").classList.add("header__nav--close"),setTimeout((function(){document.querySelector(".header__nav--active").remove("header__nav--active")}),1e3),document.body.classList.remove("stop-scroll")}))})),o.addEventListener("click",(function(e){document.querySelector(".header__nav--active").classList.add("header__nav--close"),setTimeout((function(){document.querySelector(".header__nav--active").remove("header__nav--active")}),1e3),document.body.classList.remove("stop-scroll")}))}}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci9idXJnZXIuanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsIm1lbnVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRpdk1lbnUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsIm91dGVySFRNTCIsIm1lbnUyIiwic3BhbklzIiwic3BhbiIsInN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwidGFiSW5kZXgiLCJhZGQiLCJpbWciLCJwcmVwZW5kIiwiYXBwZW5kIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwic2V0VGltZW91dCIsImJvZHkiLCJlIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFJQSxFQUFTQyxTQUFTQyxjQUFjLFdBQ2hDQyxFQUFPRixTQUFTQyxjQUFjLGdDQUM5QkUsR0FGU0gsU0FBU0MsaUJBQWMsK0NBRXhCRCxTQUFHQSxjQUFTSSw4QkFFWkosU0FBU0MsaUJBQWMsNENBR25DRixFQUFPTSxpQkFBaUIsU0FDdkIsU0FDQ0MsR0FDQUEsRUFBSUMsaUJBQ0hDLElBQUFBLEVBQU9DLFNBQWNDLGNBQWVDLE9BQ3JDSixPQUFRSyxZQUFjLElBQUFMLEVBQUFJLFVBQXNCVCxFQUFBVyxVQUFBQyxFQUFBRCxVQUFBTixFQUFBSSxVQUFBVCxFQUFBVyxVQUM1Q2IsRUFBUVksVUFBTUEsSUFBQUEsdUJBQ2RaLFNBQUllLEtBQVNmLFVBQVNDLElBQUFBLGVBQ3RCLElBQUljLEVBQVVBLFNBQU9kLGNBQWUsY0FBcEMsUUFDcUJTLElBQVRWLEdBQThCLE1BQVBlLEVBQU8sQ0FBekMsSUFDQUMsRUFBVWhCLFNBQVFVLGNBQVUsUUFtQjVCLEdBbkJBTSxFQUNJQyxNQUFNQyxRQUFTLFFBQW5CRixFQUNJQyxNQUFNRSxNQUFPLE9BQWpCSCxFQUNJUixNQUFNWSxPQUFDWCxPQUNWTyxPQUFLQyxXQUFhLEtBQWxCRCxFQUNBQSxNQUFLQyxLQUFTLE9BQ2ZELEVBQUNDLE1BQU1JLElBQUEsU0FDTkwsRUFDQUEsTUFBS0MsS0FBUyxPQUNmRCxFQUFBQyxNQUFBSSxJQUFBLFFBQ0FMLEVBQ0lNLFNBQVUsRUFBZE4sRUFJSUwsVUFBV1ksb1NBQWZQLEVBS0NKLFVBQVlaLElBQUFBLGFBSmJnQixFQUtDUSxVQUFjRCxVQUhmaEIsRUFLQWtCLFFBQUFULEdBQ0FoQixPQUFTQyxXQUFjLElBQUEsQ0FDdkJELElBQUFBLEVBQVNJLFNBQUFBLGNBQWlCLE9BSnpCb0IsRUFLRVosVUFBQ1AsSUFBQUEsaUJBSkhFLEVBTUVQLE9BQVNDLEVBTFosQ0FDQUQsU0FNSUEsY0FBU0Msb0JBQWN5QixPQUFBbkIsR0FMM0JQLFNBTU1JLGlCQUFLLCtDQUFBdUIsU0FBQSxTQUFBQyxHQUxWQSxFQUFHdkIsaUJBTWFPLFNBTGYsV0FPQVosU0FBQUMsY0FBQSx3QkFBQVcsVUFBQVcsSUFBQSxzQkFDRnZCLFlBQVNJLFdBQ1J3QixTQUFHdkIsY0FBaUIsd0JBQ2J3QixPQUFBLHNCQU5MLEdBT0E3QixLQU5BQSxTQU9BOEIsS0FBV2xCLFVBQUFpQixPQUFJLGNBTmhCLEdBQ0YsSUFDQTdCLFNBT0dBLGlCQUFjWSw0Q0FBK0JlLFNBQUEsU0FBQUMsR0FOL0NBLEVBT0V2QixpQkFBQyxTQUNILFdBTkVMLFNBQVNDLGNBQWMsd0JBQXdCVyxVQUFVVyxJQUFJLHNCQVFoRU8sWUFBQSxXQUNBZCxTQUFLWCxjQUFpQix3QkFBc0J3QixPQUFBLHNCQUMzQyxHQUFBLEtBQ0E3QixTQUFBK0IsS0FBQW5CLFVBQUFpQixPQUFBLGNBTkMsR0FDRixJQUdBYixFQU9DWCxpQkFBQSxTQUFBLFNBQUEyQixHQUdEaEMsU0FBRUMsY0FBQSx3QkFBQVcsVUFBQVcsSUFBQSxzQkFDSE8sWUFBQSxXQUNDOUIsU0FBQUMsY0FBQSx3QkFBQTRCLE9BQUEsc0JBTkMsR0FBRyxLQUdIN0IsU0FBUytCLEtBQUtuQixVQUFVaUIsT0FBTyxjQUNoQyxHQUNELENBQ0QiLCJmaWxlIjoiYnVyZ2VyL2J1cmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fd3JhcHBlciAubWlkZGxlLW5hdicpO1xyXG5sZXQgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtLWFjdGl2ZSAubWlkZGxlLW5hdiAubmF2X19pdGVtJyk7XHJcblxyXG5sZXQgbWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX193cmFwcGVyIC50b3AtbmF2Jyk7XHJcbmxldCBtZW51TGlzdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtLWFjdGl2ZSAudG9wLW5hdiAubmF2X19pdGVtJyk7XHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG5cdChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBkaXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1NzYpID8gZGl2TWVudS5pbm5lckhUTUwgPSBtZW51Lm91dGVySFRNTCArIG1lbnUyLm91dGVySFRNTDogZGl2TWVudS5pbm5lckhUTUwgPSBtZW51Lm91dGVySFRNTDtcclxuXHRcdGRpdk1lbnUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYtLWFjdGl2ZScpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xyXG5cdFx0bGV0IHNwYW5JcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93Q2xvc2UnKTtcclxuXHRcdGlmICghKHR5cGVvZiAoc3BhbklzKSAhPSAndW5kZWZpbmVkJyAmJiBzcGFuSXMgIT0gbnVsbCkpIHtcclxuXHRcdFx0bGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdFx0c3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0c3Bhbi5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xyXG5cdFx0XHRzcGFuLnN0eWxlLmhlaWdodCA9IFwiMjRweFwiO1xyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPiA1NzYpIHtcclxuXHRcdFx0XHRzcGFuLnN0eWxlLmxlZnQgPSAnNzJweCc7XHJcblx0XHRcdFx0c3Bhbi5zdHlsZS50b3AgPSAnMzRweCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3Bhbi5zdHlsZS5sZWZ0ID0gJzE2cHgnO1xyXG5cdFx0XHRcdHNwYW4uc3R5bGUudG9wID0gJzEycHgnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNwYW4udGFiSW5kZXggPSAwO1xyXG5cdFx0XHRzcGFuLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cmVjdCB4PVwiNC41NzUyXCIgeT1cIjIuOTU0MVwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIzXCIgcng9XCIxLjVcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgNC41NzUyIDIuOTU0MSlcIiAvPicgK1xyXG5cdFx0XHRcdCc8cmVjdCB4PVwiMjEuNTQ1OVwiIHk9XCI1LjA3NTJcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiM1wiIHJ4PVwiMS41XCIgdHJhbnNmb3JtPVwicm90YXRlKDEzNSAyMS41NDU5IDUuMDc1MilcIiAvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nO1xyXG5cdFx0XHRzcGFuLmNsYXNzTGlzdC5hZGQoJ3Nob3dDbG9zZScpO1xyXG5cdFx0XHRzcGFuLmFyaWFMYWJlbCA9ICfQl9Cw0LrRgNGL0YLRjCdcclxuXHJcblx0XHRcdGRpdk1lbnUucHJlcGVuZChzcGFuKTtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTc2KSB7XHJcblx0XHRcdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0aW1nLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGlzdC1pbWcnKTtcclxuXHRcdFx0XHRkaXZNZW51LmFwcGVuZChpbWcpXHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fd3JhcHBlcicpLmFwcGVuZChkaXZNZW51KTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LS1hY3RpdmUgLm1pZGRsZS1uYXYgLm5hdl9faXRlbScpLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG5cdFx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtLWFjdGl2ZScpLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LS1jbG9zZScpO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LS1hY3RpdmUnKS5yZW1vdmUoJ2hlYWRlcl9fbmF2LS1hY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbCcpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi0tYWN0aXZlIC50b3AtbmF2IC5uYXZfX2l0ZW0nKS5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuXHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LS1hY3RpdmUnKS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdi0tY2xvc2UnKTtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi0tYWN0aXZlJykucmVtb3ZlKCdoZWFkZXJfX25hdi0tYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gcHNldWRvRWxtID1lbG0ucHJldmlvdXNTaWJsaW5nXHJcblx0XHRcdHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdC8vIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItLWFjdGl2ZScpO1xyXG5cdFx0XHRcdC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi0tYWN0aXZlJykuY2xhc3NMaXN0XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LS1hY3RpdmUnKS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdi0tY2xvc2UnKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtLWFjdGl2ZScpLnJlbW92ZSgnaGVhZGVyX19uYXYtLWFjdGl2ZScpO1xyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0Ly8gc3Bhbi5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuXHRcdFx0XHQvLyBpbWcuc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbCcpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0pOyJdfQ==
