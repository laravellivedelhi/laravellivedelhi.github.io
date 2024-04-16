$(function(){
    $('#header').load('components/header.html', function(){
        $('#all_meetups').load('components/meetups.html')
        $('.pre_loader').addClass('d-none');
    });

    $('#footer').load('components/footer.html', function(){
       
    });

    $('#livestream').load('components/live.html', function(){
       
    });

    $('#join-laravelDelhi').load('components/join.html', function(){
       
    });
    
});
$(document).ready(function(){
        today   =   new Date().toDateString();
        $.get('./data/meetup.json',function(meetup_json){

        meetup_json = JSON.parse(meetup_json);
        var meetup_data   =   meetup_json.upcoming_meetup;
       
        $('.meetup_name').text(meetup_data.name);
        $('.meetup_time').text(meetup_data.time);
        $('.meetup_day').text(meetup_data.day);
        $('.meetup_date').text(meetup_data.date);
        $('.watch-live').addClass('d-none');

        if(meetup_data.address!==''){
            $('.meetup_address').text(meetup_data.address);
        }
        $('.meetup_ticket').attr('href',meetup_data.ticket);
        
        meetup_date     =   new Date(meetup_data.date).toDateString();
        if(today==meetup_date){
            $('.meetup_status').text('Current Event');
        }

        if(meetup_data.live_link && meetup_data.live_link != '' && today==meetup_date){
            $('.watch-live').attr('href',meetup_data.live_link).removeClass('d-none');
        }

        if (today<meetup_date) {
            $('.meetup_status').text('Upcoming event');
        }

        if(today>meetup_date){
            $('.meetup_status').text('Recent event');
        }

        if(meetup_data.ticket==''){
            $('.meetup_ticket').addClass('d-none');
            $('.volunteer').removeClass('d-none');
        }
        
    });

    
    
});


$('.meetup_address').click(function(){
    if($(this).text()!=='To be decided' || $($this).text()!==''){
        window.open(meetup_data.map_link, '_blank'); 
        
    }
});
