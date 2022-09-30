$("document").ready(function () {
  $("#username").on("keyup", function (e) {
    let username = e.target.value;
    //make request to github
    $.ajax({
      url: "https://api.github.com/users/" + username,
      data: {
        client_id: "7ce5374f3a484af44be8",
        client_secret: "c21816476044db641dfa059db3303820a233b3a7",
      },
    }).done(function (user) {
      $.ajax({
        url: "https://api.github.com/users/" + username + "/repos",
        data: {
          client_id: "7ce5374f3a484af44be8",
          client_secret: "c21816476044db641dfa059db3303820a233b3a7",
          sort: "created:asc",
          per_page: 5,
        },
      }).done(function (repos) {
         $.each(repos,function(index,repo){
             $(".descp3").append(`
             <div class="card mb-2 p-2 bg-secondary">
             <div class="row">
               <div class="col-md-7">
                 <strong>${repo.name}</strong>: ${repo.description}
               </div>
               <div class="col-md-3">
                 <span class="badge badge-dark">Forks: ${repo.forks_count}</span>
                 <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                 <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
               </div>
               <div class="col-md-2">
                 <a href="${repo.html_url}" target="_blank" class="btn btn-dark">Repo Page</a>
               </div>
             </div>
           </div>
             `)
         })
      });
      $(".description").html(`
      <div class="container border border-success border-2">
                  <div class="row name border border-dark border-top-0 border-start-0 border-end-0 bg-dark">
                     <div class="uname">${user.name}</div>
                   </div>
                   <div class="row">
                <div class="col-md-5">
                    <img src="${user.avatar_url}" alt="user_image" class="user_img">
                   <a target="_blank" class="btn btn-primary btn-block vprofile" href="${user.html_url}">View Profile</a>
                </div>
                <div class="col-md-7">
                    <div class="row ">
                         <div class="ubadge">
                        <button type="button" class="btn btn-primary position-relative">
                           Public Repos:
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            ${user.public_repos}
                             <span class="visually-hidden">unread messages</span>
                             </span>
                        </button>

                        <button type="button" class="btn btn-primary position-relative">
                        Public Gists:
                         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                         ${user.public_gists}
                          <span class="visually-hidden">unread messages</span>
                          </span>
                     </button>

                     <button type="button" class="btn btn-primary position-relative">
                     Public Gists:
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      ${user.public_gists}
                       <span class="visually-hidden">unread messages</span>
                       </span>
                  </button>

                  <button type="button" class="btn btn-primary position-relative">
                     Followers:
                   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                       ${user.followers}
                     <span class="visually-hidden">unread messages</span>
                    </span>
                 </button>
                

               <button type="button" class="btn btn-primary position-relative">
                     Following:
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    ${user.following}
                    <span class="visually-hidden">unread messages</span>
                     </span>
                </button>
                       </div>
                    </div>
                    <div class="row user_info p-4">
                           <ul class="list-group border border-warning">
                            <li class="list-item border border-dark border-start-0 border-end-0 border-top-0 p-3 fw-semibold">Company: ${user.company}</li>
                            <li class="list-item border border-dark border-start-0 border-end-0 border-top-0 p-3 fw-semibold">Website/Blog: ${user.blog}</li>
                            <li class="list-item border border-dark border-start-0 border-end-0 border-top-0 p-3 fw-semibold ">Location: ${user.location}</li>
                            <li class="list-item border border-dark border-start-0 border-end-0 border-top-0 p-3 fw-semibold">Member Since: ${user.created_at}</li>
                            <li class="list-item border border-dark border-start-0 border-end-0 border-top-0 p-3 fw-semibold">Last Updated: ${user.updated_at}</li>
                           </ul>
                    </div>
                </div>
               </div>
               <div class="row">
            </div>
            `);
            
            $('.descp2').html(`
                  <div class=" border border-success border-2 container mt-2 text-center mb-2 descp3">
                      <h3 class="page-header mt-1 text-decoration-underline">Latest Repos</h3>

                   </div>
            `)
    });
  });
});
