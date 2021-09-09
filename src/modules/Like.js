import $ from 'jquery';

class Like {
    constructor() {
        this.events();
    }

    events() {
        $(".like-box").on("click",this.ourClickDispatcher.bind(this));
    }

    ourClickDispatcher(e) {
        var currentLikeBox = $(e.target).closest(".like-box");

        if (currentLikeBox.data('exists') == 'yes') {
            this.deleteLike();
        } else {
            this.createLike();
        }
    }

    createLike() {
        $.ajax({
            url: universityData.root_url + '/wp-json/university/v1/manageLike',
            type: 'POST',
            success: (res) => {
                console.log(res);
            },
            error: (res) => {
                console.log(res);
            }
        });
    }

    deleteLike() {
        $.ajax({
            url: universityData.root_url + '/wp-json/university/v1/manageLike',
            type: 'DELETE',
            success: (res) => {
                console.log(res);
            },
            error: (res) => {
                console.log(res);
            }
        });
    }

}

export default Like;