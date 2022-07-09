$(function(){
    $('#header').load('components/header.html', function(){
        $('#all_meetups').load('components/meetups.html')
        $('.pre_loader').addClass('d-none');
    });

    $('#footer').load('components/footer.html', function(){
       
    });

    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    if(utc=='2022/07/09'){
        $('#livestream').load('components/live.html', function(){
       
        });
    }
    
});
$(document).ready(function(){
        today   =   new Date();
        $.get('data/meetup.json',function(data){

        meetup_data   =   data.upcoming_meetup;
       
        $('.meetup_name').text(meetup_data.name);
        $('.meetup_time').text(meetup_data.time);
        $('.meetup_day').text(meetup_data.day);
        $('.meetup_date').text(meetup_data.date);
        if(meetup_data.address!==''){
            
            $('.meetup_address').text(meetup_data.address);

        }
        $('.meetup_ticket').attr('href',meetup_data.ticket);
        
        meetup_date     =   new Date(meetup_data.date);
        if(today==meetup_date){
            $('.meetup_status').text('Current Event');
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
