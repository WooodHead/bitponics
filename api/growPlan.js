var GrowPlanModel = require('../models/growPlan').model;

/**
 * module.exports : function to be immediately invoked when this file is require()'ed 
 * 
 * @param app : app instance. Will have the configs appended to a .config property. 
 */
module.exports = function(app) {
  /*
   * API overview page
   */
  app.get('/api', function (req, res) {
    res.render('api', {
      title: "Bitponics API",
      appUrl : app.config.appUrl
    });
  });

   //List grow plans
  app.get('/api/grow_plans', function (req, res){
    console.log("in grow_plans callback");
    return GrowPlanModel.find(function (err, grow_plans) {
      console.log("in GrowPlanModel callback");
      if (!err) {
        return res.send(grow_plans);
      } else {
        return console.log(err);
      }
    });
  });

  /*
   * Create single grow plan
   *
   *  Test with:
   *  jQuery.post("/api/grow_plans", {
   *    "parentGrowPlanId": "growplanid",
   *    "createdByUserId": "userid",
   *    "name": "Jack's Grow Plan",
   *    "description": "Herbs on a raft.",
   *    "plants": ["basil", "rosemary", "dill", "swiss chard"],
   *    "expertiseLevel": "expert",
   *    "growSystem": "",
   *    "growMedium": "",
   *    "nutrients": "",
   *    "sensors": "",
   *    "controls": "",
   *    "phases": ""
   *  }, function (data, textStatus, jqXHR) {
   *    console.log("Post resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
   *  });
   */
  app.post('/api/grow_plans', function (req, res){
    var grow_plan;
    console.log("POST: ");
    console.log(req.body);
    grow_plan = new GrowPlanModel({
      parentGrowPlanId: req.body.parentGrowPlanId,
      createdByUserId: req.body.createdByUserId,
      name: req.body.name,
      description: req.body.description,
      plants: req.body.plants,
      expertiseLevel: req.body.expertiseLevel,
      growSystem: req.body.growSystem,
      growMedium: req.body.growMedium,
      nutrients: req.body.nutrients,
      sensors: req.body.sensors,
      controls: req.body.controls,
      phases: req.body.phases
    });
    grow_plan.save(function (err) {
      if (!err) {
        return console.log("created grow_plan");
      } else {
        return console.log(err);
      }
    });
    return res.send(grow_plan);
  });

  /*
   * Read a grow plan
   *
   * To test:
   * jQuery.get("/api/grow_plans/${id}", function(data, textStatus, jqXHR) {
   *     console.log("Get response:");
   *     console.dir(data);
   *     console.log(textStatus);
   *     console.dir(jqXHR);
   * });
   */
  app.get('/api/grow_plans/:id', function (req, res){
    return GrowPlanModel.findById(req.params.id, function (err, grow_plan) {
      if (!err) {
        return res.send(grow_plan);
      } else {
        return console.log(err);
      }
    });
  });

  /*
   * Update a grow plan
   *
   * To test:
   * jQuery.ajax({
   *     url: "/api/grow_plan/${id}",
   *     type: "PUT",
   *     data: {
   *       "title": "New Grow Plan Title"
   *     },
   *     success: function (data, textStatus, jqXHR) {
   *         console.log("Post response:");
   *         console.dir(data);
   *         console.log(textStatus);
   *         console.dir(jqXHR);
   *     }
   * });
   */
  app.put('/api/grow_plans/:id', function (req, res){
    return GrowPlanModel.findById(req.params.id, function (err, grow_plan) {
      grow_plan.title = req.body.title;
      return grow_plan.save(function (err) {
        if (!err) {
          console.log("updated grow_plan");
        } else {
          console.log(err);
        }
        return res.send(grow_plan);
      });
    });
  });

  /*
   * Delete a grow plan
   *
   * To test:
   * jQuery.ajax({
   *     url: "/api/grow_plans/${id}", 
   *     type: "DELETE",
   *     success: function (data, textStatus, jqXHR) { 
   *         console.log("Post resposne:"); 
   *         console.dir(data); 
   *         console.log(textStatus); 
   *         console.dir(jqXHR); 
   *     }
   * });
   */
  app.delete('/api/grow_plans/:id', function (req, res){
    return GrowPlanModel.findById(req.params.id, function (err, grow_plan) {
      return grow_plan.remove(function (err) {
        if (!err) {
          console.log("removed");
          return res.send('');
        } else {
          console.log(err);
        }
      });
    });
  });
};