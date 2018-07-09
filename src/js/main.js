$(document).ready(function () {

  /* DATA start */

  let data = [{
    "_id": "5b425b941f8be86b9d03002a",
    "index": 0,
    "title": "et ipsum reprehenderit velit aute aute excepteur et",
    "children": [{
      "_id": "5b425b94d204711c16c512fe",
      "index": 0,
      "isActive": true,
      "balance": "$1,653.97",
      "picture": "http://placehold.it/128x128",
      "name": "Snyder Duke"
    },
      {
        "_id": "5b425b94082800c2abdf2189",
        "index": 1,
        "isActive": false,
        "balance": "$1,815.72",
        "picture": "http://placehold.it/128x128",
        "name": "Alana Black"
      }
    ]
  },
    {
      "_id": "5b425b94c35e6d764f4e6dc8",
      "index": 1,
      "title": "excepteur sint incididunt laboris commodo veniam nisi consequat",
      "children": [{
        "_id": "5b425b9474ee3e36864e0478",
        "index": 0,
        "isActive": true,
        "balance": "$3,982.54",
        "picture": "http://placehold.it/128x128",
        "name": "Bruce Bates"
      },
        {
          "_id": "5b425b945a306e1ad3054bf9",
          "index": 1,
          "isActive": false,
          "balance": "$3,950.58",
          "picture": "http://placehold.it/128x128",
          "name": "Adela Ewing"
        },
        {
          "_id": "5b425b94dba042ba5ce2cc45",
          "index": 2,
          "isActive": true,
          "balance": "$1,631.53",
          "picture": "http://placehold.it/128x128",
          "name": "Pearl Dillard"
        }
      ]
    },
    {
      "_id": "5b425b94184ec03bdfc0669f",
      "index": 2,
      "title": "esse excepteur ea sint consequat ullamco elit labore",
      "children": [{
        "_id": "5b425b94cf2876b6f2e5cc48",
        "index": 0,
        "isActive": true,
        "balance": "$1,881.58",
        "picture": "http://placehold.it/128x128",
        "name": "Jan Vance"
      },
        {
          "_id": "5b425b948e8ebad91215bda8",
          "index": 1,
          "isActive": true,
          "balance": "$1,344.76",
          "picture": "http://placehold.it/128x128",
          "name": "Duncan Pugh"
        }
      ]
    },
    {
      "_id": "5b425b946a849354ef3f9f3d",
      "index": 3,
      "title": "fugiat eu dolor et aute ex elit incididunt",
      "children": [{
        "_id": "5b425b94cef27292e544cf75",
        "index": 0,
        "isActive": true,
        "balance": "$1,145.44",
        "picture": "http://placehold.it/128x128",
        "name": "Lelia Stafford"
      },
        {
          "_id": "5b425b94244a4dc8cab2a5ba",
          "index": 1,
          "isActive": false,
          "balance": "$2,907.70",
          "picture": "http://placehold.it/128x128",
          "name": "Carmen Marquez"
        },
        {
          "_id": "5b425b94f029eae4dc5549f2",
          "index": 2,
          "isActive": true,
          "balance": "$1,276.07",
          "picture": "http://placehold.it/128x128",
          "name": "Shanna Solis"
        },
        {
          "_id": "5b425b94df2fa51085a83e96",
          "index": 3,
          "isActive": true,
          "balance": "$2,553.73",
          "picture": "http://placehold.it/128x128",
          "name": "Madeleine Barton"
        },
        {
          "_id": "5b425b9414fc2c44117a2f3d",
          "index": 4,
          "isActive": true,
          "balance": "$2,946.81",
          "picture": "http://placehold.it/128x128",
          "name": "Wall Parsons"
        },
        {
          "_id": "5b425b947227a390148d2729",
          "index": 5,
          "isActive": false,
          "balance": "$3,847.50",
          "picture": "http://placehold.it/128x128",
          "name": "Eva Calhoun"
        }
      ]
    },
    {
      "_id": "5b425b949a29cc2670957d59",
      "index": 4,
      "title": "aliquip proident est pariatur sit et dolore aliquip",
      "children": [{
        "_id": "5b425b940bba6c64a31fd48e",
        "index": 0,
        "isActive": true,
        "balance": "$3,552.22",
        "picture": "http://placehold.it/128x128",
        "name": "Lynn Zamora"
      },
        {
          "_id": "5b425b94c1b86573c4a860bc",
          "index": 1,
          "isActive": false,
          "balance": "$1,865.91",
          "picture": "http://placehold.it/128x128",
          "name": "Fleming Cummings"
        },
        {
          "_id": "5b425b94a4391bb5d9b20a60",
          "index": 2,
          "isActive": true,
          "balance": "$3,234.68",
          "picture": "http://placehold.it/128x128",
          "name": "Marks Wooten"
        },
        {
          "_id": "5b425b948ddaab40cb3482f1",
          "index": 3,
          "isActive": false,
          "balance": "$3,721.46",
          "picture": "http://placehold.it/128x128",
          "name": "Nannie Phelps"
        }
      ]
    },
    {
      "_id": "5b425b94028928bbdcaf54a5",
      "index": 5,
      "title": "fugiat minim dolor sit veniam adipisicing sunt officia",
      "children": [{
        "_id": "5b425b948537baf5476773a0",
        "index": 0,
        "isActive": false,
        "balance": "$3,366.68",
        "picture": "http://placehold.it/128x128",
        "name": "Anthony Dean"
      },
        {
          "_id": "5b425b94f310da9074946ce4",
          "index": 1,
          "isActive": true,
          "balance": "$3,338.86",
          "picture": "http://placehold.it/128x128",
          "name": "Elvia Gallagher"
        },
        {
          "_id": "5b425b94bb210c52decb3bcc",
          "index": 2,
          "isActive": true,
          "balance": "$2,146.74",
          "picture": "http://placehold.it/128x128",
          "name": "Earnestine Reese"
        },
        {
          "_id": "5b425b94a3918a8c464c80e9",
          "index": 3,
          "isActive": false,
          "balance": "$1,848.29",
          "picture": "http://placehold.it/128x128",
          "name": "Roy Hahn"
        }
      ]
    }
  ];
  /* DATA send */

  /* creating content start */

  const wrapper = $('.tab-content');
  for (let k in data) {
    let ch = data[k].children;
    $('.nav-tabs').append(`
      <li class="nav-item">
        <a href="#${data[k]._id}" class="nav-link disabled" 
        data-toggle="tab" role="tab" title="${data[k]._id}">
          <span class="d-flex justify-content-center align-items-center flex-wrap">${data[k].index + 1}</span>
        </a>
      </li>
    `);
    let content = `<div class="tab-pane" role="tabpanel" id="${data[k]._id}">
                    <h2 class="title text-center">${data[k].title} ?</h2>
                  `;
    content += '<div class="box-holder d-flex justify-content-around flex-wrap">';
    for (let i = 0; i < ch.length; i++) {
      content += `<figure class="figure">
                       <img src=" ${ch[i].picture}" alt="#"/>
                       <figcaption class="figure-caption">${ch[i].name}</figcaption>
                       <span class="balance">${ch[i].balance}</span>
                    </figure>`;
    }
    content += '</div>';
    wrapper.append(content);
  }
  let btns = `
            <div class="buttons d-flex justify-content-around flex-wrap">
              <button type="button" class="btn btn-primary prev-step ">Previous</button>
              <button type="button" class="btn btn-success next-step" disabled="disabled">Next</button>
              <button type="button" class="btn btn-danger results">Show selected</button>
            </div>
          `;
  wrapper.after(btns);

  $('.nav-tabs li a').eq(0).addClass('active').removeClass('disabled');
  $('.tab-content div').eq(0).addClass('show active');
  /* creating content end */

  /* logic-app start */
  let tab = $('a[data-toggle="tab"]');
  const nextBtn = $(".next-step");
  const prevBtn = $(".prev-step");
  const resultBtn = $(".results").hide();
  const box = $('.figure');
  let firsEl = $('.nav-item').eq(0);
  let resultBox = $('.result-content');
  let resultTitle = $('.result-title').hide();

  function showPrevBtn() {
    if (firsEl.children().hasClass('active')) {
      prevBtn.hide();
    }
    else {
      prevBtn.show();
    }
  }

  showPrevBtn();

  box.click(function () {
    $(this).toggleClass('checked');
    toggleBtn();
  });

  function showResult() {
    let elemChecked = $('.tab-content').children().find(".checked");
    resultBox.html('');
    $(elemChecked).clone().appendTo(resultBox)
  }

  function toggleBtn() {
    if ($('.tab-pane.active').find(box).hasClass('checked')) {
      nextBtn.attr('disabled', false);
      if ($('.tab-content').children().eq(-1).hasClass('active')) {
        resultBtn.show();
        resultBtn.on('click', function () {
          resultTitle.show();
          showResult();
        });
        nextBtn.hide();
      }
    }
    else {
      nextBtn.attr('disabled', true);
      nextBtn.show();
      resultBtn.hide();
    }
  }

  tab.on('show.bs.tab', function (e) {
    let target = $(e.target);
    if (!$('.tab-pane.active').find(box).hasClass('checked')) {
      nextBtn.attr('disabled', false);
      target.parent().nextAll().find('.nav-link').addClass('disabled')
    }

    let nexTabs = target.parent().nextAll().find('.nav-link');
    let prevTabs = target.parent().prevAll().find('.nav-link');
    if (nexTabs.hasClass('complete')) {
      nexTabs.removeClass('complete');
    }
    prevTabs.addClass('complete');
  });
  tab.on('shown.bs.tab', function (e) {
    let target = $(e.target);
    let fs = target.parents('.nav-tabs').children().eq(0);
    if (fs.children().hasClass('active')) {
      prevBtn.hide();
    }
  });
  tab.on('shown.bs.tab', function (e) {
    let target = $(e.target);
    let fs = target.parents('.nav-tabs').children().eq(0);
    if (fs.children().hasClass('active')) {
      prevBtn.hide();
    }
  });

  nextBtn.click(function () {
    $(this).attr('disabled', true);
    let activeLink = $('.nav-link.active');
    activeLink.addClass('complete');
    activeLink.parent().next().find('.nav-link').removeClass('disabled');
    nextTab(activeLink);
    toggleBtn();
    showPrevBtn();
  });
  prevBtn.click(function () {

    let activeLink = $('.nav-link.active');
    prevTab(activeLink);
    activeLink.removeClass('complete');
    toggleBtn();
    showPrevBtn();
  });

  function nextTab(elem) {
    $(elem).parent().next().find(tab).click();
  }

  function prevTab(elem) {
    $(elem).parent().prev().find(tab).click();
  }

});


/* logic-app end */