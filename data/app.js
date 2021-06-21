function showTable() {
  $(".table").addClass("show");
  $('.main_logo').addClass('hide');
  setTimeout(() => {$('.table_content').addClass('table_content_afterclick');
  },200);
  setTimeout(() => {$('.table_element').addClass('show');
  },3000)
  setTimeout(() => {$('.russia').addClass('show');
  },3000)
  setTimeout(() => {$('.group_teams').addClass('group_teams_afterclick');
  },4000)
}
