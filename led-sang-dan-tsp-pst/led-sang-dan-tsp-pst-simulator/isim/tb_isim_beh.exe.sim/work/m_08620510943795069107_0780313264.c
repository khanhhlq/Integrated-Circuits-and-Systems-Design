/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/led-sang-dan-tsp-pst/design.v";
static unsigned int ng1[] = {0U, 0U};
static unsigned int ng2[] = {128U, 0U};
static unsigned int ng3[] = {255U, 0U};
static unsigned int ng4[] = {1U, 0U};



static void Always_2_0(char *t0)
{
    char t20[8];
    char t44[8];
    char *t1;
    char *t2;
    char *t3;
    char *t4;
    char *t5;
    unsigned int t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    char *t11;
    char *t12;
    unsigned int t13;
    unsigned int t14;
    unsigned int t15;
    unsigned int t16;
    unsigned int t17;
    char *t18;
    char *t19;
    char *t21;
    char *t22;
    unsigned int t23;
    unsigned int t24;
    unsigned int t25;
    unsigned int t26;
    unsigned int t27;
    unsigned int t28;
    unsigned int t29;
    unsigned int t30;
    unsigned int t31;
    unsigned int t32;
    unsigned int t33;
    unsigned int t34;
    char *t35;
    char *t36;
    unsigned int t37;
    unsigned int t38;
    unsigned int t39;
    unsigned int t40;
    unsigned int t41;
    char *t42;
    char *t43;

LAB0:    t1 = (t0 + 2840U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(2, ng0);
    t2 = (t0 + 3160);
    *((int *)t2) = 1;
    t3 = (t0 + 2872);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(2, ng0);

LAB5:    xsi_set_current_line(3, ng0);
    t4 = (t0 + 1208U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (~(t6));
    t8 = *((unsigned int *)t5);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB6;

LAB7:    xsi_set_current_line(4, ng0);

LAB9:    xsi_set_current_line(5, ng0);
    t2 = (t0 + 1368U);
    t3 = *((char **)t2);
    t2 = (t3 + 4);
    t6 = *((unsigned int *)t2);
    t7 = (~(t6));
    t8 = *((unsigned int *)t3);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB10;

LAB11:    xsi_set_current_line(17, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t5, t4, 0, 0, 8, 0LL);

LAB12:
LAB8:    goto LAB2;

LAB6:    xsi_set_current_line(3, ng0);
    t11 = ((char*)((ng1)));
    t12 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t12, t11, 0, 0, 8, 0LL);
    goto LAB8;

LAB10:    xsi_set_current_line(5, ng0);

LAB13:    xsi_set_current_line(6, ng0);
    t4 = (t0 + 1528U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t13 = *((unsigned int *)t4);
    t14 = (~(t13));
    t15 = *((unsigned int *)t5);
    t16 = (t15 & t14);
    t17 = (t16 != 0);
    if (t17 > 0)
        goto LAB14;

LAB15:    xsi_set_current_line(11, ng0);

LAB32:    xsi_set_current_line(12, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = ((char*)((ng1)));
    memset(t20, 0, 8);
    t11 = (t4 + 4);
    t12 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = *((unsigned int *)t5);
    t8 = (t6 ^ t7);
    t9 = *((unsigned int *)t11);
    t10 = *((unsigned int *)t12);
    t13 = (t9 ^ t10);
    t14 = (t8 | t13);
    t15 = *((unsigned int *)t11);
    t16 = *((unsigned int *)t12);
    t17 = (t15 | t16);
    t23 = (~(t17));
    t24 = (t14 & t23);
    if (t24 != 0)
        goto LAB36;

LAB33:    if (t17 != 0)
        goto LAB35;

LAB34:    *((unsigned int *)t20) = 1;

LAB36:    t19 = (t20 + 4);
    t25 = *((unsigned int *)t19);
    t26 = (~(t25));
    t27 = *((unsigned int *)t20);
    t28 = (t27 & t26);
    t29 = (t28 != 0);
    if (t29 > 0)
        goto LAB37;

LAB38:    xsi_set_current_line(13, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = ((char*)((ng3)));
    memset(t20, 0, 8);
    t11 = (t4 + 4);
    t12 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = *((unsigned int *)t5);
    t8 = (t6 ^ t7);
    t9 = *((unsigned int *)t11);
    t10 = *((unsigned int *)t12);
    t13 = (t9 ^ t10);
    t14 = (t8 | t13);
    t15 = *((unsigned int *)t11);
    t16 = *((unsigned int *)t12);
    t17 = (t15 | t16);
    t23 = (~(t17));
    t24 = (t14 & t23);
    if (t24 != 0)
        goto LAB43;

LAB40:    if (t17 != 0)
        goto LAB42;

LAB41:    *((unsigned int *)t20) = 1;

LAB43:    t19 = (t20 + 4);
    t25 = *((unsigned int *)t19);
    t26 = (~(t25));
    t27 = *((unsigned int *)t20);
    t28 = (t27 & t26);
    t29 = (t28 != 0);
    if (t29 > 0)
        goto LAB44;

LAB45:    xsi_set_current_line(14, ng0);
    t2 = ((char*)((ng4)));
    t3 = (t0 + 1928);
    t4 = (t3 + 56U);
    t5 = *((char **)t4);
    memset(t44, 0, 8);
    t11 = (t44 + 4);
    t12 = (t5 + 4);
    t6 = *((unsigned int *)t5);
    t7 = (t6 >> 0);
    *((unsigned int *)t44) = t7;
    t8 = *((unsigned int *)t12);
    t9 = (t8 >> 0);
    *((unsigned int *)t11) = t9;
    t10 = *((unsigned int *)t44);
    *((unsigned int *)t44) = (t10 & 127U);
    t13 = *((unsigned int *)t11);
    *((unsigned int *)t11) = (t13 & 127U);
    xsi_vlogtype_concat(t20, 8, 8, 2U, t44, 7, t2, 1);
    t18 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t18, t20, 0, 0, 8, 0LL);

LAB46:
LAB39:
LAB16:    goto LAB12;

LAB14:    xsi_set_current_line(6, ng0);

LAB17:    xsi_set_current_line(7, ng0);
    t11 = (t0 + 1928);
    t12 = (t11 + 56U);
    t18 = *((char **)t12);
    t19 = ((char*)((ng1)));
    memset(t20, 0, 8);
    t21 = (t18 + 4);
    t22 = (t19 + 4);
    t23 = *((unsigned int *)t18);
    t24 = *((unsigned int *)t19);
    t25 = (t23 ^ t24);
    t26 = *((unsigned int *)t21);
    t27 = *((unsigned int *)t22);
    t28 = (t26 ^ t27);
    t29 = (t25 | t28);
    t30 = *((unsigned int *)t21);
    t31 = *((unsigned int *)t22);
    t32 = (t30 | t31);
    t33 = (~(t32));
    t34 = (t29 & t33);
    if (t34 != 0)
        goto LAB21;

LAB18:    if (t32 != 0)
        goto LAB20;

LAB19:    *((unsigned int *)t20) = 1;

LAB21:    t36 = (t20 + 4);
    t37 = *((unsigned int *)t36);
    t38 = (~(t37));
    t39 = *((unsigned int *)t20);
    t40 = (t39 & t38);
    t41 = (t40 != 0);
    if (t41 > 0)
        goto LAB22;

LAB23:    xsi_set_current_line(8, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = ((char*)((ng3)));
    memset(t20, 0, 8);
    t11 = (t4 + 4);
    t12 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = *((unsigned int *)t5);
    t8 = (t6 ^ t7);
    t9 = *((unsigned int *)t11);
    t10 = *((unsigned int *)t12);
    t13 = (t9 ^ t10);
    t14 = (t8 | t13);
    t15 = *((unsigned int *)t11);
    t16 = *((unsigned int *)t12);
    t17 = (t15 | t16);
    t23 = (~(t17));
    t24 = (t14 & t23);
    if (t24 != 0)
        goto LAB28;

LAB25:    if (t17 != 0)
        goto LAB27;

LAB26:    *((unsigned int *)t20) = 1;

LAB28:    t19 = (t20 + 4);
    t25 = *((unsigned int *)t19);
    t26 = (~(t25));
    t27 = *((unsigned int *)t20);
    t28 = (t27 & t26);
    t29 = (t28 != 0);
    if (t29 > 0)
        goto LAB29;

LAB30:    xsi_set_current_line(9, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t44, 0, 8);
    t5 = (t44 + 4);
    t11 = (t4 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (t6 >> 1);
    *((unsigned int *)t44) = t7;
    t8 = *((unsigned int *)t11);
    t9 = (t8 >> 1);
    *((unsigned int *)t5) = t9;
    t10 = *((unsigned int *)t44);
    *((unsigned int *)t44) = (t10 & 127U);
    t13 = *((unsigned int *)t5);
    *((unsigned int *)t5) = (t13 & 127U);
    t12 = ((char*)((ng4)));
    xsi_vlogtype_concat(t20, 8, 8, 2U, t12, 1, t44, 7);
    t18 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t18, t20, 0, 0, 8, 0LL);

LAB31:
LAB24:    goto LAB16;

LAB20:    t35 = (t20 + 4);
    *((unsigned int *)t20) = 1;
    *((unsigned int *)t35) = 1;
    goto LAB21;

LAB22:    xsi_set_current_line(7, ng0);
    t42 = ((char*)((ng2)));
    t43 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t43, t42, 0, 0, 8, 0LL);
    goto LAB24;

LAB27:    t18 = (t20 + 4);
    *((unsigned int *)t20) = 1;
    *((unsigned int *)t18) = 1;
    goto LAB28;

LAB29:    xsi_set_current_line(8, ng0);
    t21 = ((char*)((ng1)));
    t22 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t22, t21, 0, 0, 8, 0LL);
    goto LAB31;

LAB35:    t18 = (t20 + 4);
    *((unsigned int *)t20) = 1;
    *((unsigned int *)t18) = 1;
    goto LAB36;

LAB37:    xsi_set_current_line(12, ng0);
    t21 = ((char*)((ng4)));
    t22 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t22, t21, 0, 0, 8, 0LL);
    goto LAB39;

LAB42:    t18 = (t20 + 4);
    *((unsigned int *)t20) = 1;
    *((unsigned int *)t18) = 1;
    goto LAB43;

LAB44:    xsi_set_current_line(13, ng0);
    t21 = ((char*)((ng1)));
    t22 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t22, t21, 0, 0, 8, 0LL);
    goto LAB46;

}


extern void work_m_08620510943795069107_0780313264_init()
{
	static char *pe[] = {(void *)Always_2_0};
	xsi_register_didat("work_m_08620510943795069107_0780313264", "isim/tb_isim_beh.exe.sim/work/m_08620510943795069107_0780313264.didat");
	xsi_register_executes(pe);
}
