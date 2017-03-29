maintenance
===========

A maintenance environment for Elastic Beanstalk that always returns 503.

Setup
-----

```sh
eb init
eb create <environment name> --elb-type application
```

And then, [change health URL to "/health" at the created instance of Application Load Balancer](http://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html).

If you want to use the env with https, add HTTPS listner to the application load balancer.
