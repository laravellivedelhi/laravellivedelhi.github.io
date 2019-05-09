$(document).ready(function(){
        today   =   new Date();
        $.get('data/meetup.json',function(data){
        meetup_data   =   JSON.parse(data).upcoming_meetup;
        
        $('.meetup_name').text(meetup_data.name);
        $('.meetup_time').text(meetup_data.time);
        $('.meetup_day').text(meetup_data.day);
        $('.meetup_date').text(meetup_data.date);
        $('.meetup_ticket').attr('href',meetup_data.ticket);
        
        meetup_date     =   new Date(meetup_data.date);
        if(today==meetup_date){
            $('.meetup_status').text('Current Event');
        }

        if(today<meetup_date){
            $('.meetup_status').text('Upcoming event');
        }

        if(today>meetup_date){
            $('.meetup_status').text('Recent event');
        }
        
    });

    $('.pre_loader').addClass('d-none');
    
})