---
sidebar_position: 9
---

# 9. Business Continuity and Operational Resilience

## **9.1 Business Continuity** {#9.1-business-continuity}

We currently have a high level description for our approach to business continuity and disaster recovery ([see section 16](./evidence-register-tools-and-systems)).

## **9.2 Disaster Recovery Plan**  {#9.2-disaster-recovery-plan}

Regarding disaster recovery we have a disaster recovery plan in place for our main online services. For each of the services we are addressing the following items:

**Disaster scenarios**  
What could go wrong with this service? What could bring it down?

**Impact**  
What is the impact of the service being un-available, associated risk and probabilities this happens?

**Access list**  
Who has access to this service and with what level of permissions? Who could potentially take the whole service down?

**Backups**  
What is the current backup strategy for the service ? Where are backups stored ? How frequently are they performed?

**Recovery process**  
In case of a critical event, what would the process be to recover the service ? What does the service provider offer? How does that work?

Our main services are

* AWS  
* Balena Cloud  
* GitHub  
* Google Workspace  
* Bitwarden  
* Website  
* Domain  
* Registries – NPM  
* Registries – Maven  
* Registries – DockerHub  
* Slack  
* Google Playstore  
* Apple account

The details and status of the disaster recovery plan is laid down in situation assessment which is continuously improved and described in [disaster recovery](https://docs.google.com/document/d/1zSvdKXf0o0t_39qCwqVoqNm4YByEAkhBjUL57YM8KMs/edit?usp=sharing).

## **9.3 Resilience Testing** {#9.3-resilience-testing-–-placeholder}

:::note
This is work in progress and not fully implemented yet, as OpenRemote, we are working on this subject and will publish an update soon.
:::

OpenRemote periodically tests the resilience of its systems and recovery procedures. Tests may include backup restoration, service failover simulations, or recovery exercises.

The results of these tests are documented and used to improve resilience planning.
