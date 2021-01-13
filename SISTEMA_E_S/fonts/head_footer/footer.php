<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/smoke.min.js"></script>
<script src="js/jquery.dataTables.min.js"></script>
<script src="js/dataTables.bootstrap4.min.js"></script>
<script src="js/fileinput.min.js"></script>
<script src="js/main.js"></script>
<script src="vendor/minimalist-picker/dobpicker.js"></script>
<script src="vendor/jquery-validation/dist/jquery.validate.min.js"></script>
<script src="vendor/jquery-validation/dist/additional-methods.min.js"></script>
<script src="vendor/jquery-steps/jquery.steps.min.js"></script>
<script src="js/main3.js"></script>
<script type="text/javascript" src="js/jquery.smartWizard.min.js"></script>

<script type="text/javascript">
    $(document).ready(function(){

        // Step show event
        $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
           //alert("You are on step "+stepNumber+" now");
           if(stepPosition === 'first'){
               $("#prev-btn").addClass('disabled');
           }else if(stepPosition === 'final'){
               $("#next-btn").addClass('disabled');
           }else{
               $("#prev-btn").removeClass('disabled');
               $("#next-btn").removeClass('disabled');
           }
        });

        // Toolbar extra buttons
        var btnFinish = $('<button></button>').text('Finish')
                                         .addClass('btn btn-info')
                                         .on('click', function(){ alert('Finish Clicked'); });
        var btnCancel = $('<button></button>').text('Cancel')
                                         .addClass('btn btn-danger')
                                         .on('click', function(){ $('#smartwizard').smartWizard("reset"); });

        // Smart Wizard 1
        $('#smartwizard').smartWizard({
                selected: 0,
                theme: 'arrows',
                transitionEffect:'fade',
                showStepURLhash: false,
                toolbarSettings: {toolbarPosition: 'both',
                                  toolbarExtraButtons: [btnFinish, btnCancel]
                                }
        });

    });
</script>
